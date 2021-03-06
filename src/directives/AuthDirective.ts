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
        const { APP_PK = 'w3oJxx8RByKHmK5u7taIn70Cp1Ar8hPCX9ZweHVIjBaj6V4otCv6ygavUq4RPfA3' } = process.env
        const { Application } = ctx.db
        const { date, code } = verify(
          token,
          APP_PK,
        ) as TokenPayload
        const app = await Application.findOne( { code } )
        if (!app || !app.enable) {
          throw new CustomError('Unauthorized', 'UNAUTHORIZED_ERROR', {
          detail: 'Token not valid',})
        }
        const authApp = { date, code }
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
