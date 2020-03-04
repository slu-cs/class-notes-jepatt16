// bakery web server
const express = require('express');

// create server
const app = express();

// stop all the favicon requests
app.get('/favicon.ico', function(req, res){
  res.status(204).end(); // we got nothin for ya but it's ok
});

// log requests to console
app.use(function(req, res, next){
  console.log('\n*************', new Date().toLocaleTimeString(),
              '\nmethod: ', req.method,
              '\npath: ', req.url,
              '\nbody: ', req.body,
            );
  next();
});

// cs-linuxlab-31.stlawu.edu:3000/
app.get('/', function(req, res){
  res.send(`
    <h1>Bakery</h1>
    <ul>
      <li><a href='/cakes'>Cakes</a></li>
      <li><a href='/shakes'>Shakes</a></li>
    </ul>
  `);
});

// routing
// cs-linuxlab-31.stlawu.edu:3000/cakes/
app.use('/cakes', require('./cakes.js')); //send cake requests to another file
app.use('/shakes', require('./shakes.js'));

// unhandled requests
app.use(function(req, res, next){
  console.log('404 page not found :(');
  res.status(404).send('404 page not found :(');
});

// server error handling
app.use(function(error, rq, res, next){
  console.error(error.stack);
  res.status(500).send(error.message); // DO NOT DO THIS IN REAL CODE
})

app.listen(3000);
console.log('the server will see you now');
