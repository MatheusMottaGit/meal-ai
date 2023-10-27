import { FastifyInstance } from "fastify";
import { z } from "zod";
import { openai } from "../lib/openai";
import { OpenAIStream, streamToResponse } from 'ai'

export async function generateAiCompletionRoute(app: FastifyInstance) {
  app.post('/ai/completion', async (request, reply) => {
    const completionSchema = z.object({
      prompt: z.string()
    })

    const { prompt } = completionSchema.parse(request.body)

    const promptMessage = prompt.replace('{ingredientes}', prompt)

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      messages: [
        { role: 'user', content: promptMessage }
      ],
      stream: true
    })

    const stream = OpenAIStream(response)

    streamToResponse(stream, reply.raw, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      }
    })
  })
}