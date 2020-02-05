// synchronous function calls wait for a result before doing the next thing
// asynchronous calls handle the result whenever it happens to come
// async is good for web programming

// import statement
const readline = require('readline');

// console stuff
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

user.question('Enter a filename: ', function(filename){
  console.log(filename);
});
