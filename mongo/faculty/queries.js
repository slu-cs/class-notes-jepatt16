// query the data
// just one for now

// imports
const mg = require('mongoose');
const connect = require('./db.js');
const Professor = require('.schema.js');

connect(); // database time

// what documents are in the collection
const query = Professor.find();
query.exec(function(error, professors){
  if (error) console.error(error.stack);
  console.log(professors);
});
