import { Document, DocumentQuery, Types } from 'mongoose'
import { FindMethodsArgs } from './types'
import { CustomError } from './errors'
import moment from 'moment'

const isMongoId = (value: string): boolean => Types.ObjectId.isValid(value)

const pagination = <TDoc extends Document>(
  query: DocumentQuery<TDoc[], TDoc>,
  args: FindMethodsArgs,
): DocumentQuery<TDoc[], TDoc> => {
  const { skip, limit } = args

  // return query.skip(skip).limit(limit <= 20 ? limit : 20)
  return query.skip(skip).limit(limit)
}

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
    // console.log('conditions: ', JSON.stringify(conditions, null, 4))
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
          dateGte: moment(period['start']).startOf('day'),
          dateLte: moment(period['end']).endOf('day'),
        },
      ],
    }
    const periodResult = sensorConditions(periodRequest)
    return periodResult
  }
  return {}
}
const whereConditions = (
  ids: Record<string, any> = {},
): Record<string, any> => {
  if (ids) {
    var str = JSON.stringify(ids)
    str = str.replace(/_id/g, 'device')
    ids = JSON.parse(str)
    const localRequest = {
      $or: ids,
    }
    return localRequest
  }
  return {}
}

const sensorValue = (
  value: Record<string, any> = {},
): Record<string, any> => 
  Object.keys(value).reduce((conditions, valueKey) => {

    const operator = operators.find(({ name }) =>
      new RegExp(`${name}$`).test(valueKey),
    )
    const fieldName = operator
      ? valueKey.replace(operator.name, '') // resource
      : '$' + valueKey.toLowerCase() // $or

    const fieldNewName = fieldName
      ? 'value.' + fieldName
      : fieldName

    // console.log('fieldNewName: ', JSON.stringify(fieldNewName, null, 4))
    const fieldValue = operator
      ? {
          ...conditions[fieldNewName],
          [operator.op]: value[valueKey],
        }
      : // Tratando condicoes OR, NOR, AND - Novo Array
        value[valueKey].map(sensorConditions)
    return {
      ...conditions,
      [fieldNewName]: fieldValue,
    }
  }, {})

export {
  sensorConditions,
  whereConditions,
  sensorPeriod,
  sensorValue,
  isMongoId,
  pagination,
}
