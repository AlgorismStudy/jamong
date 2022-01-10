let fs = require("fs");

let input = fs.readFileSync("1920.txt").toString().split("\n");
let N = input[0];
let origin = input[1].split(" ").map((x) => +x);
let compare = input[3].split(" ").map((x) => +x);
let answer = [];
console.log(N,origin, compare);

for (i of compare) {
  if (i <= N && i >= 1) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}
for (i of answer) {
  console.log(i);
}
