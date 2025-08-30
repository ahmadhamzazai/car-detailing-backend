import express from "express"
import { bookAppointment } from "../controller/appointment_controller.js"

const router = express.Router()

router.post("/book_appointment", bookAppointment)

export default router