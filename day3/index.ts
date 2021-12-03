const fs = require("fs");
const input = fs.readFileSync('input.txt', 'utf8').split("\n");

const {gamma, epsilon} = input
    .map((item, index) => {
        return input.reduce((acc, curr) => {
            curr[index] == 1 && acc++;
            return acc;
        }, 0)
    })
    .splice(0, 12)
    .reduce(({epsilon, gamma}, curr) => {
        return curr > input.length / 2 ? ({
            epsilon: epsilon + "0",
            gamma: gamma + "1"
        }) : ({epsilon: epsilon + "1", gamma: gamma + "0"})
    }, {epsilon: "0", gamma: "0"})

console.log("Result: ", parseInt(gamma, 2) * parseInt(epsilon, 2)) //4138664