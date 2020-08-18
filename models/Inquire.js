const mongoose = require("mongoose");
const InquireSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name Required"],
  },
  address: {
    type: String,
    trim: true,
    required: [true, "Address Required"],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Please Fill Valid Email Address`,
    ],
    trim: true,
    required: [true, "Email Required"],
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        var re = /^\d{10}$/;
        return v == null || v.trim().length < 1 || re.test(v);
      },
      message: "Provided phone number is invalid.",
    },
    trim: true,
    required: [true, "Name Required"],
  },
  squarefootage: {
    type: String,
    enum: [
      "700-",
      "800",
      "900",
      "1000",
      "1100",
      "1200",
      "1300",
      "1400",
      "1500",
      "1600",
      "1700",
      "1800",
      "1900",
      "2000",
      "2100",
      "2200",
      "2300",
      "2400",
      "2500+",
    ],
    required: [true, "Square Footage Required"],
  },
  frequency: {
    type: String,
    enum: [
      "OneTime",
      "Daily",
      "Weekly",
      "WeekendsOnly",
      "Monthly",
      "OnCall",
      "Other(Specify)",
    ],
    required: [true, "Frequency Required"],
  },
  type: {
    type: String,
    enum: [
      "AutoDealerCleaning",
      "BuildingMaintenance",
      "Residential",
      "MedicalOfficeCleaning",
      "OfficeCleaning",
      "PostConstructionCleaning",
      "School/UniversityCleaning",
      "Other(Specify)",
    ],
    required: [true, "Type Required"],
  },
  additionalInformation: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Inquire = mongoose.model("inquire", InquireSchema);

module.exports = Inquire;
