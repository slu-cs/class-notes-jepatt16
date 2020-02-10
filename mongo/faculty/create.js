// store some data in the db

// imports
const mg = require('mongoose');
const connect = require('./db.js');
const Professor = require('.schema.js');

connect(); // database time

// connection might not happen immediately (asynchronicity)
// commands entered before the connection come through are held in a queue

// make some data
const harcourt = new Professor({
  name: 'Ed Harcourt',
  rank: 'Full',
  started: 2003,
  courses: [
    140,
    220,
    345,
    362,
    364
    ]
});

const torrey = new Professor({
  name: 'Lisa Torrey',
  rank: 'Associate',
  started: 2009,
  courses: [
    140,
    219,
    332,
    362,
    374,
    380
  ]
});

const lee = new Professor({
  name: 'Choong-Soo Lee',
  rank: 'Associate',
  started: 2010,
  courses: [
    140,
    219,
    256,
    321,
    370
  ]
});

// delete old data
// takes a function as a command to do once the drop
// command has been completed
// the pyramid of doom/callback hell
mg.connection.dropDatabase(function(){
  // save data
  harcourt.save(function(error){
    if (error) console.error(error.stack);
    torrey.save(function(error){
      if (error) console.error(error.stack);
      clee.save(function(){
        if (error) console.error(error.stack);
        mg.connection.close(function(){
          console.log('Connection closed.')
        });
      });
    });
  });
});
