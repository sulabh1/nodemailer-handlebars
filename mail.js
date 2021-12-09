const nodemailer = require("nodemailer");
const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const randompassword = require("./randompass");

const sendMail = async (option) => {
  const source = fs.readFileSync(path.join(__dirname, "template.hbs"), "utf8");
  const template = Handlebars.compile(source);
  const randPass = randompassword(12);
  const htmlTemp = template({ randPass, email: option.email });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const mailOption = {
    from: "Feat",
    to: option.email,
    subject: "Mail from feat",
    html: htmlTemp,
  };
  await transporter.sendMail(mailOption);
};
module.exports = sendMail;
