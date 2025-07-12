const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    dates: {
      type: [Date],
      required: [true, "Dates are required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const BookingModel = model("Booking", bookingSchema);

module.exports = BookingModel;
