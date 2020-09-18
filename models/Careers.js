const mongoose = require("mongoose");
const CareersSchema = mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: [true, "Name Required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email Required"],
  },
  experience: {
    type: String,
    trim: true,
    required: [true, "Experience Required"],
  },
  yearsExperience: {
    type: String,
    trim: true,
  },
  whyJanitorial: {
    type: String,
    trim: true,
  },
  additionalInformation: {
    type: String,
    trim: true,
    required: [true, "Additional Information Required"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Careers = mongoose.model("careers", CareersSchema);

module.exports = Careers;
