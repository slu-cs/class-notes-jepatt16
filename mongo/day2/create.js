// store some data in the db

// imports
const mg = require('mongoose');
const connect = require('./db.js');
const Professor = require('./schema.js');

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

// alternative to pyramid of doom
// mg.connection.dropDatabase()
//   .then(function(){
//     return harcourt.save();
//   })
//   .then(function(){
//     return torrey.save();
//   })
//   .then(function(){
//     return lee.save();
//   })
//   .then(function(){
//     console.log('Database is ready.');
//     return mongoose.connection.close();
//   })
//   .catch(function(error){
//     console.error(error.stack);
//   })
// 

// even better w/ arrows
mg.connection.dropDatabase()
  .then(_ => harcourt.save())
  .then(_ => torrey.save())
  .then(_ => lee.save())
  .then(_ => mongoose.connection.close())
  .then(_ => console.log('Database is ready.'))
  .catch(error => console.log(error.stack));
