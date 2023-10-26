import { prisma } from "../src/lib/prisma";

async function main() {
  await prisma.prompt.create({
    data: {
      title: 'Opções de receitas com os ingredientes',
      template: `
        Seu papel é gerar pelo menos 3 opções de receitas.

        Abaixo você receberá alguns ingredientes, e você deverá criar e listar pelo menos 3 opções para o usuário.

        Mais opções de receitas são válidas.

        Retorne APENAS as receitas em forma de lista, baseado no exemplo abaixo:
        ...
        - Receita 1
        - Receita 2
        - Receita 3
        ...

        Ingredientes solicitados:
        ...
        {ingredientes}
        ...
      `.trim()
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.log(error)
    await prisma.$disconnect()
    process.exit(1)
  })