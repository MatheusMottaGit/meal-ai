import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function registerMealRoute(app: FastifyInstance) {
  app.post('/meal', async (request) => {
    const createMealSchema = z.object({
      description: z.string()
    })

    const { description } = createMealSchema.parse(request.body)


  })
}