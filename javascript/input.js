// synchronous function calls wait for a result before doing the next thing
// asynchronous calls handle the result whenever it happens to come
// async is good for web programming

// import statements
const readline = require('readline');
const fs = require('fs');

// console stuff
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

user.question('Enter a filename: ', function(filename){
  // console.log(filename);
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });
  file.on('line', function(line){
    console.log(line);
  });
  // end the program when the file closes
  file.on('close', _ => process.exit(0));

  // console.log('waiting');
});

// proof that the above call is asynchronous
// console.log('\nnot waiting');
