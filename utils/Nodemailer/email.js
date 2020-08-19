require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.email = function (data) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASS,
    },
  });
  let mailOptions = {
    from: process.env.EMAIL,
    // to: "john-hooker@hotmail.com",
    to: "adamcarlbirgenheier@gmail.com",
    subject: `QUESTION -- ${data.title}`,
    text: `Hi John,
   ${data.question}
    `,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return console.log("Email sent!!!");
  });
};
