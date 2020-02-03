// Object and array syntax

// Object literal

const point = {x: 1, y: 2}
console.log(point);

point.x = 3; // change object properties

//  nested objects
const circle = {
	center: {x: 1, y: 2},
	radius: 4
};

console.log(circle.center.x);
console.log(circle.color); // returns undefined, does not crash

circle.color = 'blue'; // add properties to object
console.log(circle.color);

