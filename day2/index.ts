const fs = require("fs");
const commands = fs.readFileSync('input.txt', 'utf8').split("\n");

let depth = 0;
let x = 0;
let aim = 0;

//part1
commands.map(i => {
    const [key, value] = i.split(" ").map((i,ind) => ind % 2 ? Number(i) : i);
    switch(key){
        case "down": {
            depth+=value;
            break;
        }
        case "up": {
            depth-=value;
            break;
        }
        default: { // "forward"
            x+=value;
            break;
        }
    }
});
// console.log(depth,x,aim) // 906454, 2003, 980;

// reset variables
depth = 0;
x = 0;

//part2
commands.map(i => {
    const [key, value] = i.split(" ").map((i,ind) => ind % 2 ? Number(i) : i);
    switch(key){
        case "down": {
            aim+=value;
            break;
        }
        case "up": {
            aim-=value;
            break;
        }
        default: { // "forward"
            x+=value;
            depth+=(value * aim);
            break;
        }
    }
});
console.log(x,depth) // 2003, 905474;