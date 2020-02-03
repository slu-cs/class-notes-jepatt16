let x = 0;
let y = 1;
while (x < 1000){
	x += y;
	y = x - y;
}
console.log(x);

let total = 0;
for (let i = 1; i <= 100; i++){
	if (((i % 3 === 0) || (i % 5 === 0 )) && ((i % 3) !== (i % 5))){
		total++;
	}
}

console.log(total);

let done = false;
let cur = 1;
while (!done){
	done = true;	
	for (let i = 1; i <= 10; i++){
		if (cur % i !== 0){
			done = false;
}
}
cur++;
}
console.log(cur);

