var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ilovethechiefs@gmail.com',
      pass: '$April2015$'
    }
  });

  var mailOptions = {
    from: 'John Doe <johndoe@outlook.com>',
    to: 'ilovethechiefs@gmail.com',
    subject: 'Website Submission',
    text: 'You have a new submission with the following details...Name: ' + req.body.name + ' Email: ' + req.body.Email + ' Message: ' + req.body.Message,
    html: '<p>You have a new submission with the following details</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.Email+'</li><li>Message: '+req.body.Message+'</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message sent: '+info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
