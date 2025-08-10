const express = require("express");
const router = express.Router();
const BookingModel = require("../models/Bookings.model");
const nodemailer = require("nodemailer");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//request a booking via email, needs to be accepted
router.post("/request", async (req, res) => {
  try {
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "horheyinc8.gmail.com",
        pass: "",
      },
    });
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
      to: "bar@example.com, baz@example.com",
      subject: "Hello ✔",
      text: "Hello world?", // plain‑text body
      html: "<b>Hello world?</b>", // HTML body
    });
    console.log("Message sent:", info);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
router.post("/booking", async (req, res) => {
  try {
    console.log(req.body);
    const createdBooking = await BookingModel.create({
      user: "687285919ef0b0214718cfae",
      ...req.body,
    });
    console.log("booking created", createdBooking);
    res.status(201).json(createdBooking);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
router.get("/bookings", async (req, res, next) => {
  try {
    const bookingsInDB = await BookingModel.find();
    console.log(bookingsInDB);
    res.status(200).json(bookingsInDB);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
