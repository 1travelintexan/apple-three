const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
