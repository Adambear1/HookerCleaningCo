require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { email } = require("../utils/Nodemailer/email");

router.post("/", ({ body }, res) => {
  console.log(body.question.slice(-1)[0]);
  db.Email.create({
    title: body.title,
    question: body.question.slice(-1)[0],
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
