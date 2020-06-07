const config = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);

async function sendMessage() {
  try {
    const message = await client.messages.create({
      to: config.phone,
      from: '+19093039448',
      body: 'Twilio sms',
    });
    console.log(message.sid);
  } catch (error) {
    console.log(error);
  }
}

sendMessage();
