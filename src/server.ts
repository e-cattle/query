require('dotenv').config()
import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { context } from './config'
import { catchErrors } from './middleware/catchErrors'
import resolvers from './resolvers'
// import { AuthDirective } from './directives/AuthDirective'

const typeDefs = resolve(__dirname, './schema/index.graphql')

const server = new GraphQLServer({
  resolvers,
  typeDefs,
  context,
  middlewares: [catchErrors],
  // schemaDirectives: {
  //   auth: AuthDirective,
  // },
})

export default server
