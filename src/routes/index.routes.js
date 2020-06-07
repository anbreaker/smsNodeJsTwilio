// Of Express only Router
const {Router} = require('express');

// Route management
const router = Router();

const {sendMessage} = require('../twilio/send-sms');

// Of Controllers go to Routes of server
// Render Index
router.get('/', (req, res) => {
  res.render('index');
});

// Receiving form data
router.post('/send-sms', async (req, res) => {
  const response = await sendMessage(req.body.message, req.body.phone);
  console.log(response.id);
  res.send('received');
});

module.exports = router;
