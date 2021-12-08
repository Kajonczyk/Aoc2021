const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8').split(',').map(Number);

const NUMBER_OF_DAYS = 80;
for (let i = 0; i < NUMBER_OF_DAYS; i++) {
	const newFishes = [];
	for(let j = 0; j < input.length; j++){
		if(input[j] === 0){
			newFishes.push(8);
			input[j] = 6;
		} else {
			--input[j];
		}
	}
	input.push(...newFishes);
}
