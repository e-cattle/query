import { GraphQLFieldResolver } from 'graphql'
import { Context } from '..'

export type Resolver<TArgs, TSource = {}> = GraphQLFieldResolver<
  TSource,
  Context,
  TArgs
>

export interface SubscriptionArgs {
  value: Record<string, any>
}

export interface SubscriptionPayload<T> {
  node: T
}

export interface SubscriptionResolver<TNode, TSource = {}> {
  subscribe: Resolver<SubscriptionArgs, TSource>
  resolve: Resolver<SubscriptionArgs, SubscriptionPayload<TNode>>
}
