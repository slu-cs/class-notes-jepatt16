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

queries[0].exec(function(error, professors) {
	if (error) console.error(error.stack);
	const names = professors.map(p => p.name);
	console.log('Names in order: ', names);
});
// Professor.find().sort('-started').limit(1)
queries[1].exec(function(error, professors) {
  if (error) console.error(error.stack);

  const names = professors.map(p => p.name);
  console.log('Started most recently: ', names);
});

// Professor.find().where('started').equals(2003)
queries[2].exec(function(error, professors) {
  if (error) console.error(error.stack);

  const names = professors.map(p => p.name);
  console.log('Started in 2003: ', names);
});

// Professor.find().where('courses').in(362)
queries[3].exec(function(error, professors) {
  if (error) console.error(error.stack);

  const names = professors.map(p => p.name);
  console.log('Teaches 362: ', names);
});

// Professor.distinct('rank')
queries[4].exec(function(error, ranks) {
  if (error) console.error(error.stack);

  console.log('Distinct ranks: ', ranks);
});
