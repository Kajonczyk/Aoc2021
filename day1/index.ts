const fs = require("fs");
const numbers = fs.readFileSync('input.txt', 'utf8').split("\n").map(Number);

const part1 = numbers.reduce((acc,curr,i,arr) => (i > 0 && arr[i] > arr[i-1] ? ++acc : acc),0)

console.log(part1) //1374;

const part2 = numbers
    .reduce((acc,curr,i,arr) => (arr[i + 2] ? [...acc, arr[i] + arr[i+1] + arr[i+2]] : acc),[])
    .reduce((acc,curr,i,arr) => arr[i] > arr[i-1] ? ++acc : acc, 0);

console.log(part2) // 1418;