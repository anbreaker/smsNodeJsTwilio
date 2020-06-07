const config = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);

/**
 * Send an Sms message
 * @param {string} body - The sms to send
 * @param {string} phone - The phone number
 */

async function sendMessage(body, phone) {
  try {
    const message = await client.messages.create({
      to: phone,
      from: '+19093039448',
      body: body,
    });
    console.log(message.sid);
    return message;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {sendMessage};
