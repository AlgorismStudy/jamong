let input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

input.shift();

let answer = input.sort((a, b) => a - b);

console.log(answer.join("\n"));
