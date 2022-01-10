let fs = require("fs");
let input = fs.readFileSync("1920.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let origin = input[1].split(" ").map((x) => +x);
let compare = input[3].split(" ").map((x) => +x);
let answer = [];
console.log(origin, compare);

for (i of compare) {
  if (origin.includes(i)) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}
for (i of answer) {
  console.log(i);
}
//runtime error