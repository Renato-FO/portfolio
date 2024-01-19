export default function (req: any, res: any) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "renatoordonho",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "renatoordonho@gmail.com",
    to: "renatoordonho@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.mail,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.mail}</p>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
