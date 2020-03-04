// hello world web server
const express = require('express');

// create server
const app = express();

// respond to requests

// cs-linuxlab-31.stlawu.edu:3000/
// 'get' here is the http method
app.get('/', function(req, resp){
  resp.send('jello world');
});

// cs-linuxlab-31.stlawu.edu:3000/foo
app.get('/foo', function(req, resp){
  resp.send('hello foo');
});

// cs-linuxlab-31.stlawu.edu:3000/foo/bar
app.get('/foo/bar', function(req, resp){
  resp.send('hello foobar');
});

// cs-linuxlab-31.stlawu.edu:3000/zap/z (for any z)
app.get('/zap/:z', function(req, resp){
  resp.send(`hello ${req.params.z}`);
});

// cs-linuxlab-31.stlawu.edu:3000/zap?x=a&y=b
app.get('/zap', function(req, resp){
  resp.send(`hello ${req.query.x} and ${req.query.y}`);
});


// start the server on port 3000
// traditionally you use port 80, but you need admin privileges
// also since it's in 'development' we should use a lower
// priority (higher value) port number
app.listen(3000);
console.log('the server will see you now');
