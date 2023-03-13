const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { EMAIL_USERNAME, PASSWORD } = require("../config/serverConfig");

const emailVerificationSender = (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USERNAME,
        pass: PASSWORD,
      },
    });

    const token = jwt.sign(
      {
        key: "Verified",
        email: req.body.email,
      },
      "ourSecretKey",
      { expiresIn: "5m" }
    );

    const mailConfigurations = {
      // It should be a string of sender/server email
      from: "netguapor@gmail.com",

      to: req.body.email,

      // Subject of Email
      subject: "Email Verification",

      // This would be the text of email body
      text: `Hi! There, You have recently visited 
                our website and entered your email.
                Please follow the given link to verify your email
                http://localhost:3001/api/v1/verify/${token} 
                Thanks`,
    };

    transporter.sendMail(mailConfigurations, function (error, info) {
      if (error) throw Error(error);
      console.log("Email Sent Successfully");
      console.log(info);
    });
    next();
  } catch (error) {
    console.log("Something went wrong in Email Sender Service");
    throw error;
  }
};

module.exports = {
  emailVerificationSender,
};
