let x = 0;
let y = 1;
while (x < 1000){
	x += y;
	y = x - y;
}
console.log(x);

