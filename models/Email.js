const mongoose = require("mongoose");
const EmailSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  question: {
    type: String,
    trim: true,
    required: [true, "Question Required"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Email = mongoose.model("email", EmailSchema);

module.exports = Email;
