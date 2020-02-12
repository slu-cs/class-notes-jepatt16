// define a plan for a collection

const mg = require('mongoose');

// schema for a collection of profs
const Professor = new mg.Schema({
  name: String,
  rank: String,
  started: Number,
  courses: [Number]
});

// speed up queries on all fields w/ indices
Professor.index({name: 1});
Professor.index({rank: 1});
Professor.index({started: 1});
Professor.index({courses: 1});

// compile and export the schema as a modelhistory
module.exports = mg.model('Professor', Professor);
