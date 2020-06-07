// Of Express only Router
const {Router} = require('express');

// Route management
const router = Router();

const {sendMessage} = require('../twilio/send-sms');
const SMS = require('../models/sms');

// Of Controllers go to Routes of server
// Render Index
router.get('/', async (req, res) => {
  const smsList = await SMS.find().lean();
  console.log(smsList);
  // sms.forEach((m) => console.log(m.Body));
  res.render('index', {smsList});
});

// Receiving form data
router.post('/send-sms', async (req, res) => {
  const {message, phone} = req.body;

  if (!message || !phone) return res.json('Missing message or phone');

  const result = await sendMessage(req.body.message, req.body.phone);
  console.log(result.sid);

  await SMS.create({Body: req.body.message, To: req.body.phone});
  console.log(req.body.phone);

  res.redirect('/');
});

module.exports = router;
