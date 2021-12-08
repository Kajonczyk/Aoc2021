const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split(",").map(Number);

let position = 0;
let lowest = 10_000_000;

for(let i = 0; i < input.length;i++){
	let currentMoves = 0;
	input.reduce((prev, curr) => {
		currentMoves+= Math.abs(curr - input[i]);
		return curr;
	},0)

	if(lowest > currentMoves){
		lowest = currentMoves;
		position = i;
	}

}

console.log(lowest)
