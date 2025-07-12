const express = require("express");
const router = express.Router();
const BookingModel = require("../models/Bookings.model");
router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.post("/booking", async (req, res) => {
  try {
    console.log(req.body);
    const createdBooking = await BookingModel.create(req.body);
    console.log("booking created", createdBooking);
    res.status(201).json(createdBooking);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
