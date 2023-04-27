require('dotenv').config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
   host: 'smtp.sendgrid.net',
    port: 587,
   auth: {
       user: "apikey",
        pass:process.env.SENDGRID_API_KEY
    
   }
})

transporter.sendMail({
    from: "onestepcloser7352@gmail.com", 
    to: "earthandmars555@gmail.com", 
    subject: "Test message subject", 
    text: "Hello world!", 
    html: "<b>Hello world!</b>", 
  }, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 