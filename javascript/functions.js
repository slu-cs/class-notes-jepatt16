// function syntax

// defining a function
const avg = function(a, b) {
	return (a + b)/2;
};

console.log(avg(5, 12));

const print = function(a, b) {
	console.log(`a=${a}, b=${b}`);
};

const result = print(7, 8);
print(9); // a=9, b=undefined
print();

// object methods
const rectangle = {
	width: 10,
	height: 20,
	area: function(){
		return this.width * this.height;
	}
};

console.log(rectangle.area());

// constructor (kinda defining a class)
const Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
	this.area = function(){
		return this.width * this.height;
	};
};

const new_rect = new Rectangle(2, 5.5);
print(new_rect.width, new_rect.height);

Rectangle.prototype.printdims = function(){
	console.log(`${this.width}x${this.height}`);
};

new_rect.printdims(); // this is kinda sick

// all functions are defined like lambdas basically
const TRUE = function(x){return function(y){return x;};};
const FALSE = function(x){return function(y){return y;};};
const NOT = function(p){return p(FALSE)(TRUE)};

console.log(NOT(TRUE), NOT(FALSE)); // wooooooord
