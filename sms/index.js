var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.sendchamp.com/api/v1/sms/send',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer ACCESS_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "to": [
        "2348188469520"
    ],
    "message": "Lorem ipsum d, no lele",
    "sender_name": "Dash",
    "route": "non_dnd"
})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
