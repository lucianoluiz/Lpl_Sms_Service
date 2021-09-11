const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid,authToken);

client.messages.create({
 to: 'NUMBER',
 from: process.env.TWILIO_NUMBER,
 body: 'SMS enviada com sucesso'
})
.then(p=> console.log(p))
.catch(ex => console.error(ex));