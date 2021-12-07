const fs = require("fs");
const input = fs.readFileSync('input.txt', 'utf8').split("\n").map(i => i.split("->")).flat().map(i => i.split(",").map(Number));
const parsedCords = input.reduce((r, e, i) => (i % 2 ? r[r.length - 1].push(e) : r.push([e])) && r, []).flat();

let res = parsedCords.map((i,index) => {
    if(!parsedCords[index*2] || !parsedCords[index*2 + 1]) return
    if(parsedCords[index*2][0] === parsedCords[index* 2 + 1][0] || parsedCords[index*2][1] === parsedCords[index* 2 + 1][1]){
        return [parsedCords[index*2], parsedCords[index*2 + 1]]
    }
})

res.filter(Boolean).map( i => {
    console.log(i);
    console.log("--------------")
})

