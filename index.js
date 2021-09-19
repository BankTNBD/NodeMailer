const nodemailer = require('nodemailer');

//replace ****

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '****Your Email****',
    pass: '****Your mail password****'
  }
})

var mailOptions = {
    from: '****Your email****',
    to: '****Email to****',
    subject: '****Subject****',
    text: '****Text to send****',
    html: '****HTML Format****'
}

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})
