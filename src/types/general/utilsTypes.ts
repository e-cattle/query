import { Types } from 'mongoose'
// import { Models, UserRole } from '.'
import { Models } from '..'

// export interface FindDocumentOptions {
//   model: keyof Models
//   db: Models
//   field?: string // Campo de busca
//   value?: any // Valor do campo
//   message?: string
//   query?: Record<string, any>
//   errorCode?: string
//   extensions?: Record<string, any>
// }

export interface TokenPayload {
  date: string
  id: Types.ObjectId
  name: string
}

export interface FindMethodsArgs {
  skip: number
  limit: number
  query: Record<string, any>
  period: Record<string, any>
  where: Record<string, any>
  value: Record<string, any>
}

export type OmitId<T> = Omit<T, '_id'>