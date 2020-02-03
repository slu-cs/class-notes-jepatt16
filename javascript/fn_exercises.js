/*
1. Create an array of objects representing the courses you are taking this
 semester. Each course should have a subject (e.g. 'CS') and a number
  (e.g. 332). Iterate through this array to find the largest course number
   in your schedule.
*/

const Course = function(subj, num){
  this.subject = subj;
  this.number = num;
};

const sched = [
  new Course('CS', 370),
  new Course('CS', 332),
  new Course('REL', 205),
  new Course('CS', 498)
];

let max_num = 0;
let max_course = undefined;
for (const course of sched){
  if (course.number > max_num){
    max_num = course.number;
    max_course = course;
  }
}

console.log(max_course);

/*
2. Define a constructor function for Book objects. Each book should have a
 title and an array of authors. Define a shared method for books that lets
 you check whether a given author was one of the authors in this book.
*/
const Book = function(title, auths){
  this.title = title;
  this.authors = auths;
  this.check_auths = function(auth){
    for (const anauth of this.authors){
      if (anauth === auth){
        return true;
      };
    };
    return false;
  };
};

dune = new Book('Dune', ['Frank Herbert']);
console.log(dune.check_auths('Frank Herbert'));
console.log(dune.check_auths('Brian Herbert'));

/*
3. Define a function that works like the range function in Python. For example,
 range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7].
*/

const range = function(m, n, s){
  const nums = [];
  if (n === undefined){
    n = m;
    m = 0;
  };
  if (s === undefined){
    s = 1;
  };
  for (let i = m; i < n; i += s){
    nums.push(i);
  };
  return nums;
};

console.log(range(3, 10));
console.log(range(5));
console.log(range(0, 20, 3));
