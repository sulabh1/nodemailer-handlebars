const express = require("express");

const dotenv = require("dotenv").config();

const sendMail = require("./mail");

const app = express();

app.use(express.json());

app.post("/sendmail", async (req, res) => {
  const { email } = req.body;

  try {
    await sendMail({
      email,
    });
    res.status(200).json({
      status: "success",
      message: "mail send",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: "There is problem sending mail",
    });
  }
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`listening to the port ${app.get("port")}`);
});
