'use sctrict';
const authToken = process.env.TWILIO_TOKEN;
const accountSid = process.env.TWILIO_SID;
const client = require('twilio')(accountSid, authToken);

exports.sendSms = async(dest, message) =>{
   await client.messages.create({
        to: dest,
        body: message,
        from: process.env.TWILIO_NUMBER
    })
    .then(message => message)
    .catch(error => error);
}