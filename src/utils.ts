import { SignOptions, sign } from 'jsonwebtoken'
import { Document, DocumentQuery, Types } from 'mongoose'
import {
  PagesAndOrderByArgs,
  // TokenPayload,
} from './types'
import { CustomError } from './errors'

const isMongoId = (value: string): boolean => Types.ObjectId.isValid(value)

const pagesAndSort = <TDoc extends Document>(
  query: DocumentQuery<TDoc[], TDoc>,
  args: PagesAndOrderByArgs,
): DocumentQuery<TDoc[], TDoc> => {
  // const { skip = 0, limit = 10, orderBy = [] } = args
  const { skip = 0, limit = 10 } = args

  return query.skip(skip).limit(limit <= 20 ? limit : 20)
  // .sort(orderBy.join(' '))
}

// const sensorOrderByResolver = (fields: string[]): Record<string, string> =>
//   fields.reduce(
//     (resolvers, field) => ({
//       ...resolvers,
//       [`${field}_ASC`]: field,
//       [`${field}_DESC`]: `-${field}`,
//     }),
//     {},
//   )

const operators = [
  { name: 'Eq', op: '$eq' },
  { name: 'Ne', op: '$ne' },
  { name: 'Gt', op: '$gt' },
  { name: 'Gte', op: '$gte' },
  { name: 'Lt', op: '$lt' },
  { name: 'Lte', op: '$lte' },
  { name: 'In', op: '$in' },
  { name: 'Nin', op: '$nin' },
  { name: 'Regex', op: '$regex' },
  { name: 'Options', op: '$options' },
]

const idFields = ['_id']

const sensorConditions = (
  query: Record<string, any> = {},
): Record<string, any> =>
  Object.keys(query).reduce((conditions, queryKey) => {
    if (idFields.some(idField => queryKey.includes(idField))) {
      const ids: string[] = Array.isArray(query[queryKey])
        ? query[queryKey]
        : [query[queryKey]]
      if (ids.some(id => !isMongoId(id))) {
        throw new CustomError(
          `Invalid ID value for condition '${queryKey}'!`,
          'INVALID_ID_ERROR',
        )
      }
    }

    const operator = operators.find(({ name }) =>
      new RegExp(`${name}$`).test(queryKey),
    )
    const fieldName = operator
      ? queryKey.replace(operator.name, '') // resource
      : '$' + queryKey.toLowerCase() // $or
    const fieldValue = operator
      ? {
          ...conditions[fieldName],
          [operator.op]: query[queryKey],
        }
      : // Tratando condicoes OR, NOR, AND - Novo Array
        query[queryKey].map(sensorConditions)
    return {
      ...conditions,
      [fieldName]: fieldValue,
    }
  }, {})

const sensorPeriod = (
  period: Record<string, any> = {},
): Record<string, any> => {
  if (period['start'] && period['end']) {
    const periodRequest = {
      AND: [
        {
          dateGt: period['start'],
          dateLt: period['end'],
        },
      ],
    }
    const periodResult = sensorConditions(periodRequest)
    // console.log('start ', JSON.stringify(period['start'], null, 4))
    return periodResult
  }
  return {}
}

export {
  sensorConditions,
  sensorPeriod,
  isMongoId,
  // issueToken,
  pagesAndSort,
}
