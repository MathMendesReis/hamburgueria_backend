import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import express, { Express, Request, Response,  } from "express"
import { snacks_router } from "./router/snacks"
import { oder_router } from "./router/oder"
import { checkout_router } from "./router/checkout"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5000
const prisma = new PrismaClient()

app.use(express.json())


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
app.get("/", (req:Request, res:Response) => {
  res.status(200).send("ola mundo");
})

app.use("/snacks", snacks_router)
app.use("/oders",oder_router)
app.use('/checkout', checkout_router)
