import fastify from "fastify";
import cors from '@fastify/cors'
import 'dotenv/config'
import { listAllPromptsRoute } from "./routes/list-prompts";

const app = fastify()

app.register(cors, {
  origin: '*'
})

app.register(listAllPromptsRoute)

app
  .listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333 })
  .then(() => console.log('server running!'))