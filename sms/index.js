var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.sendchamp.com/api/v1/sms/send',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer ACCESS_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"to":["2348055372961"],"message":"Hello from Olumide Latest","sender_name":"Kuda"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
