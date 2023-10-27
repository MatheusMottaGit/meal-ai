import fastify from "fastify";
import { fastifyCors } from '@fastify/cors'
import { listAllPromptsRoute } from "./routes/list-prompts";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";
import { saveCompletionRoute } from "./routes/save-completion";

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(listAllPromptsRoute)
app.register(generateAiCompletionRoute)
app.register(saveCompletionRoute)

app
  .listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333 })
  .then(() => console.log('server running!'))