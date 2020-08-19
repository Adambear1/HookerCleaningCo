require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.inquire = function (data) {
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
    subject: `NEW INQUIRE`,
    text: `Hi John,
    A new inquire has been requested at ${data.date} by ${data.name} at ${data.phone}.
    
    Name: ${data.name}

    Address: ${data.address}

    email: ${data.email}

    phone: ${data.phone}

    squarefootage: ${data.squarefootage}

    frequency: ${data.frequency}

    type: ${data.type}

    additional information: ${data.additionalInformation}
    `,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return console.log("Email sent!!!");
  });
};
