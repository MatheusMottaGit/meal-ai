import fastify from "fastify";
import cors from '@fastify/cors'
import 'dotenv/config'

const app = fastify()

app.register(cors, {
  origin: '*'
})

app
  .listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333 })
  .then(() => console.log('server running!'))