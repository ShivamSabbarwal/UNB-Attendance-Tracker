var nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
        host: 'smtp.mail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: UNBSWE4103G1,
            pass: BentonianPhysics
        }
});
export function sendEmail (to, subject, text) {
    var mailOptions = {
      from: 'UNBSWE4103G1@mail.com',
      to: to,
      subject: subject,
      text: text
    }
    transporter.sendMail(mailOptions)
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
