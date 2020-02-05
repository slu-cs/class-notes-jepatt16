// Feb 5, 2020

// this function uses another function to transform an array
const map = function(f, xs){
  const ys = [];
  for (const x of xs){
    ys.push(f(x));
  };
  return ys
};

const sq = function(x){
  x = x**2;
  return x;
};

console.log(map(sq, [1, 2, 3]));

// arrow functions
console.log(map(x => x**2, [1, 2, 3]));

// array map method
console.log([1, 2, 3].map(x => x**2));
