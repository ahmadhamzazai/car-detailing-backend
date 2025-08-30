import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/database.js"
import router from "./routes/appointment_route.js"
import cors from "cors"

dotenv.config()
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use("/api", router)

app.listen(process.env.PORT, console.log(`PORT is running on ${process.env.PORT}`))