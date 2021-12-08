const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split(',').map(Number);

let position = 0;
let lowest = Infinity;

const calculatePositionDiff = (num) => {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
};

for (let i = 0; i < input.length; i++) {
	let currentMoves = 0;

	input.reduce((_, __, index) => {
		currentMoves += calculatePositionDiff(Math.abs(i - input[index]));
	}, 0);

	if (lowest > currentMoves) {
		lowest = currentMoves;
		position = i;
	}

}

console.log(lowest);
