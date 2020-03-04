// hello world web server
const express = require('express');

// create server
const app = express();

// respond to a request
// 'get' here is the http method
app.get('/', function(req, resp){
  resp.send('jello world');
});

// start the server on port 3000
// traditionally you use port 80, but you need admin privileges
// also since it's in 'development' we should use a lower
// priority (higher value) port number
app.listen(3000);
console.log('the server will see you now');
