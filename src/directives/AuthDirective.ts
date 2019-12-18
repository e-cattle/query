import { SchemaDirectiveVisitor } from 'graphql-tools'
import { GraphQLField, defaultFieldResolver } from 'graphql'
import { CustomError } from '../errors'
import { verify } from 'jsonwebtoken'
import { Context, Resolver, TokenPayload } from '../types'

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, Context>): void {
    const {
      resolve = defaultFieldResolver,
      subscribe = defaultFieldResolver,
    } = field
    field.resolve = this.createAuthResolver(resolve)
    field.subscribe = this.createAuthResolver(subscribe)
  }

  createAuthResolver(resolver: Resolver<any>): Resolver<any> {
    return async (_, args, ctx, info) => {
  
      const Authorization = ctx.request
        ? ctx.request.get('Authorization')
        : ctx.connection.context.Authorization ||
          ctx.connection.context.authorization
      if (!Authorization) {
        throw new CustomError('Unauthenticated', 'UNAUTHENTICATED_ERROR', {
          detail: 'Token not provided',
        })
      }
      try {
        const token = Authorization.replace('Bearer ', '')
        const { Application } = ctx.db
        const { date, id, name } = verify(
          token,
          process.env.APP_PK,
        ) as TokenPayload
        const app = await Application.findById({ _id: id})
        if (!app || !app.enable) {
          throw new CustomError('Unauthorized', 'UNAUTHORIZED_ERROR', {
          detail: 'Token not valid',})
        }
        const authApp = { date, id, name }
        ctx = {
          ...ctx,
          ...authApp,
        }

      } catch (error) {
        throw new CustomError('Invalid token!', 'INVALID_TOKEN_ERROR')
      }
      return resolver.apply(this, [_, args, ctx, info])
    }
  }
}

export { AuthDirective }
