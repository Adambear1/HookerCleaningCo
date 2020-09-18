require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.careers = function (data) {
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
    subject: `Careers`,
    text: `
   Name: ${data.fullName}
   Email: ${data.email}
   Phone Number: ${data.phoneNumber}
   Experience: ${data.experience}
   ${
     data.experience == "yes" ? "Years Experience" : "Reason for Janitorial"
   } : ${data.experience == "yes" ? data.yearsExperience : data.whyJanitorial}
   Additional Information: ${data.additionalInformation}
   Data Applied: ${data.date}
    `,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return console.log("Email sent!!!");
  });
};
