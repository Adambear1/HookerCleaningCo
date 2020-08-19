require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { inquire } = require("../utils/Nodemailer/inquire");

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
      // inquire(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
