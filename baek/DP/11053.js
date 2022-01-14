const fs = require("fs");
const input = fs.readFileSync("11053.txt").toString().trim().split("\n");
const n = input[0]
const A = input[1].split(" ").map((x) => +x);
