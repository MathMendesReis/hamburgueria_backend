import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"
import { snacks_router } from "./router/snacks"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5000
const prisma = new PrismaClient()

app.use(express.json())

// app.get("/snacks", async (req: Request, res: Response) => {
//   const { snack } = req.query

//   if (!snack) return res.status(400).send({ error: "Snack is required" })

//   // SELECT * FROM Snack WHERE snack = 'drink'
//   const snacks = await prisma.snack.findMany({
//     where: {
//       snack: {
//         equals: snack as string,
//       },
//     },
//   })

//   res.send(snacks)
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.use("/snacks", snacks_router)
