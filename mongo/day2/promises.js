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

Promise.all(queries)
  .then(function(results){
  	console.log('Names in order: ', results[0].map(p => p.name));
    console.log('Started most recently: ', results[0][0].name);
		console.log('Started in 2003: ', results[2].map(p => p.name));
		console.log('Teaches 362: ', results[3].map(p => p.name));
		mg.connection.close();
	})
	.catch(function(error) {
    console.error(error.stack);
  });

