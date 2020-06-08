const MessagingResponse = require('twilio').twiml.MessagingResponse;
const {sendMessage} = require('../twilio/send-sms');
const SMS = require('../models/sms');

const indexController = async (req, res) => {
  const smsList = await SMS.find().lean();
  res.render('index', {smsList});
};

const postMessage = async (req, res) => {
  const {message, phone} = req.body;

  if (!message || !phone) return res.json('Missing message or phone');

  const result = await sendMessage(req.body.message, req.body.phone);
  console.log(result.sid);

  await SMS.create({Body: req.body.message, To: req.body.phone});
  console.log(req.body.phone);

  res.redirect('/');
};

const reciveMessage = async (req, res) => {
  console.log(req.body, req.body.From);

  const savedSMS = await SMS.create({
    Body: req.body.Body,
    From: req.body.From,
    To: req.body.To,
    FromCountry: req.body.FromCountry,
  });

  const twiml = new MessagingResponse();

  // twiml.message('This is my response');

  res.send(twiml.toString());
};

module.exports = {
  indexController,
  postMessage,
  reciveMessage,
};
