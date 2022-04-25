const fs = require("fs");
const input = fs.readFileSync("input/1402.txt").toString().trim().split("\n");
let N = +input[0];
let test = [];
let previousMap = {};
let nextMap = {};
console.log();
for (i = 0; i < N; i++) {
  test.push(input[i + 1].split(" ").map((x) => +x));
}

for (i of test) {
}

function mkCaseMap(num) {

    
}
