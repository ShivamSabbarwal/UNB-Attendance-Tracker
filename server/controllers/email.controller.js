var nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
        host: 'smtp.mail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'UNBSWE4103G1',
            pass: 'BentonianPhysics'
        }
});
export function sendEmail (req, res) {
if(!req.body.to || !req.body.subject || !req.body.text) {
    res.status(403).send("Recipient (to), subject, and text are requiered.");
  }else
    var mailOptions = {
      from: 'UNBSWE4103G1@mail.com',
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text
    }
    transporter.sendMail(mailOptions)
    res.status(200).end()
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
