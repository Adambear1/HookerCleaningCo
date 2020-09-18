require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { careers } = require("../utils/Nodemailer/careers");

router.post("/", ({ body }, res) => {
  db.Careers.create(body)
    .then((data) => {
      console.log(data);
      res.json(data);
      careers(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
