const fs = require('fs');

const newArray = [];
const input = fs.readFileSync('input.txt', 'utf8').split('\n').map(i => i.split('|')[1]).map(i => i && i.split(' ')).filter(i => Boolean(i)).map(i => i.filter(s => Boolean(s))).map(i => i.map(e => newArray.push(e)));

const sum = newArray.reduce((prev, curr) => {
	(curr.length === 3 || curr.length === 2 || curr.length === 7 || curr.length === 4) && prev++;
	return prev;
}, 0);

console.log(sum);
