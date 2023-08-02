const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  bookingTime: {
    type: String,
    required: true,
  },
  durationInHours: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  additionalNotes: {
    type: String,
  },
  status: {
    type: String,
    enum: ["booked", "confirmed", "in_progress", "completed", "cancelled"],
    default: "confirmed",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);


// bookingId: (string) - unique identifier for the booking
// userId: (string) - ID of the user who made the booking
// serviceId: (string) - ID of the selected service
// serviceCategory: (string) - category of the selected service
// providerId: (string) - ID of the service provider assigned to the booking
// bookingDate: (date) - date of the booking
// bookingTime: (time) - time of the booking
// duration: (number) - duration of the service in minutes or hours
// address: (string) - address where the service will be provided
// contactNumber: (string) - contact number of the user
// additionalNotes: (string) - any additional notes or instructions for the service provider
// status: (string) - current status of the booking (e.g., pending, confirmed, completed, cancelled)
// createdAt: (timestamp) - timestamp indicating when the booking was created
// updatedAt: (timestamp) - timestamp indicating when the booking was last updated
