const express = require("express");
const dotenv = require("dotenv");
const mailgun = require("mailgun-js");

dotenv.config();

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});
const myEmail = process.env.MY_EMAIL;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", (req, res) => {
  const { name, email, subject, message } = req.body;
  mg.messages().send(
    {
      from: `${email}`,
      to: `${myEmail}`,
      subject: `${subject}`,
      html: `<h3>${name} </h3><br></br/><p>${message}</p>`,
    },
    (error, body) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: "error in sending email" });
      } else {
        console.log(body);
        res.send({ message: "email sent successfully" });
      }
    }
  );
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is run at http://localhost:${port}`);
});
