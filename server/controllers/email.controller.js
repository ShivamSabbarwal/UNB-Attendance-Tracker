var nodemailer = require('nodemailer');

export function sendEmail (req, res) {
    var transporter = nodemailer.createTransport("SMTP",{
        service: 'gmail',
        auth: {
            user: 'swe4103g1@gmail.com',
            pass: 'BentonianPhysics'
        }
    });
    
    var mailOptions = {
      from: 'swe4103g1@gmail.com',
      to: req.body.to,
      subject: req.body.subject,
      html: req.body.html
    }
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});
    res.status(200).end()
};


