import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/database.js"

dotenv.config()
connectDB()

const app = express()

app.listen(process.env.PORT, console.log(`PORT is running on ${process.env.PORT}`))