const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const { ApolloServer } = require('apollo-server-koa')
const typeDefs = require('./data/schema')
const resolvers = require('./data/resolvers')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: { 
    settings: {
      'editor.cursorShape': 'line'
    }
  }
})  

app.prepare()
.then(() => {
  const server = new Koa();
  const router = new Router();

  graphqlServer.applyMiddleware({ app: server })
  
  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })
  
  server.use(router.routes())

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> GraphQL Server (And GraphQL Playground) ready at http://localhost:${port}${graphqlServer.graphqlPath}`);
  });
})