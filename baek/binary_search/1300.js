const fs = require("fs");
const [start, end] = fs.readFileSync("1300.txt").toString().trim().split("\n");

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    
}
