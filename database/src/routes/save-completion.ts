import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function saveCompletionRoute(app: FastifyInstance) {
  app.post('/completions', async (request) => {
    const bodySchema = z.object({
      ingredients: z.string(),
      completion: z.string()
    })

    const { completion, ingredients } = bodySchema.parse(request.body)

    // await prisma.meal.create({
    //   data: {

    //   }
    // })
  })
}