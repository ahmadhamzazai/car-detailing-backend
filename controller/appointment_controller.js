import express from "express";
import Appointment from "../model/appointment_model.js";

export const bookAppointment = async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      emailAddress,
      carMakeModel,
      preferredDate,
      preferredTime,
      selectedServices,
      totalPrice,
      discount,
      finalPrice,
    } = req.body;

    const appointment = await Appointment.create({
      fullName,
      phoneNumber,
      emailAddress,
      carMakeModel,
      preferredDate,
      preferredTime,
      selectedServices,
      totalPrice,
      discount,
      finalPrice,
    });


    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
