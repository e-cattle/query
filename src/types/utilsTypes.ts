import { Types } from 'mongoose'
// import { Models, UserRole } from '.'
import { Models } from '.'

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

// export interface TokenPayload {
//   sub: Types.ObjectId
//   role: UserRole
// }

export interface PagesAndOrderByArgs {
  skip: number
  limit: number
  query: Record<string, any>
  period: Record<string, any>
}
