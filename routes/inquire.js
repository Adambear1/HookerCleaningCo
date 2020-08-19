require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { email } = require("../utils/Nodemailer/email");

router.post("/", ({ body }, res) => {
  db.Inquire.create({
    name: body.name,
    address: body.address,
    email: body.email,
    phone: body.phone,
    squarefootage: body.squarefootage,
    frequency: body.frequency,
    type: body.type,
    additionalInformation: body.additionalInformation,
  })
    .then((data) => {
      console.log(data);
      res.json(data);
      // email(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
