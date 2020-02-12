// query the data
// more

// imports
const mg = require('mongoose');
const connect = require('./db.js');
const Professor = require('./schema.js');

connect();

// queries
const queries = [
	// what are the names of the professors
	Professor.find().sort('name'),

	// who started most recently
	Professor.find().sort('-started').limit(1),

	// who started in '03
	Professor.find().where('started').equals(2003),

	// who teaches 362
	Professor.find().where('courses').in(362),

	// what's everyone's rank
	Professor.distinct('rank')
];
