import { SignOptions, sign } from 'jsonwebtoken'
import { Document, DocumentQuery, Types } from 'mongoose'
import {
  PagesAndOrderByArgs,
  // TokenPayload,
} from './types'
import { CustomError } from './errors'

const isMongoId = (value: string): boolean => Types.ObjectId.isValid(value)

// const issueToken = (payload: TokenPayload, options?: SignOptions): string =>
//   sign(payload, process.env.JWT_SECRET, { expiresIn: '2h', ...options })

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
  where: Record<string, any> = {},
): Record<string, any> =>
  Object.keys(where).reduce((conditions, whereKey) => {
    if (idFields.some(idField => whereKey.includes(idField))) {
      const ids: string[] = Array.isArray(where[whereKey])
        ? where[whereKey]
        : [where[whereKey]]
      if (ids.some(id => !isMongoId(id))) {
        throw new CustomError(
          `Invalid ID value for condition '${whereKey}'!`,
          'INVALID_ID_ERROR',
        )
      }
    }

    const operator = operators.find(({ name }) =>
      new RegExp(`${name}$`).test(whereKey),
    )
    const fieldName = operator
      ? whereKey.replace(operator.name, '') // resource
      : '$' + whereKey.toLowerCase() // $or
    const fieldValue = operator
      ? {
          ...conditions[fieldName],
          [operator.op]: where[whereKey],
        }
      : // Tratando condicoes OR, NOR, AND - Novo Array
        where[whereKey].map(sensorConditions)

    return {
      ...conditions,
      [fieldName]: fieldValue,
    }
  }, {})

export {
  sensorConditions,
  isMongoId,
  // issueToken,
  pagesAndSort,
}
