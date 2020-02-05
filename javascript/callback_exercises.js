// import statements
const readline = require('readline');
const fs = require('fs');

// 1. JavaScript arrays have a filter method that works like this:
//
// const numbers = [1, 2, 3, 4, 5];
// const odds = numbers.filter(x => x%2 > 0);
//
// Try it out, and then write your own filter function, which would be
// called like this instead:
//
// const numbers = [1, 2, 3, 4, 5];
// const odds = filter(numbers, x => x%2 > 0);

const filter = function(xs, p){
  const ys = [];
  for (const x of xs){
    if (p(x)){
      ys.push(x);
    }
  }
  return ys;
};

const numbers = [1, 2, 3, 4, 5];
const odds = filter(numbers, x => x%2 > 0);
console.log(odds)

// 2. JavaScript arrays have a sort method that works like this:
//
// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a,b) => a - b);
// Try it out, and read about how it works. Then rewrite the arrow
// function to reverse sort the array instead.

const numbers2 = [4, 2, 5, 1, 3];
numbers2.sort((a, b) => b - a);
console.log(numbers2);

// 3. Write a program that reads this file, which shows the distribution of
// majors and minors for the class of 2019. Each line has the name of a
// discipline, the number of majors, and the number of minors, with commas
// separating these values.
//
// Create an array of objects, so that each line of the file is represented
// by an object with three properties. Then use the sort method (with a new
// arrow function) to sort disciplines by popularity. Let the popularity score
// for a discipline be the number of majors it has plus half the number
//  of minors.
//
// There is a split method that will come in handy for this exercise.

const Discipline = function(name, majs, mins){
  this.name = name;
  this.majors = majs;
  this.minors = mins;
};

const subjs = [];

const file = readline.createInterface({
  input: fs.createReadStream('javascript/majors.csv')
});
file.on('line', function(line){
  const arr = line.split(',');
  subjs.push(new Discipline(arr[0], parseInt(arr[1]), parseInt(arr[2])));
});

file.on('close', function(){
  subjs.sort((a, b) => (b.majors + b.minors/2) - (a.majors + a.minors/2));
  console.log(subjs);
});
