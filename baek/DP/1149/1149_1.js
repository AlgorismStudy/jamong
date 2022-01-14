const fs = require("fs");
const input = fs.readFileSync("1149.txt").toString().trim().split("\n");

const n = Number(input[0]);
const house = [[0, 0, 0]];

for (i of input.slice(1)) {
  house.push(i.split(" ").map((x) => +x));
}
//house 배열 만듬

//값이 들어갈 d배열 만들기
const d = [];
for (i = 0; i <= n; i++) {
  d.push([1000, 1000, 1000]);
}
//n까지 1000으로 채움
d[1] = house[1];
//d[1]은 house[1]으로 넣기

for (i = 2; i <= n; i++) {
  for (j = 0; j < 3; j++) {
    if (j == 0) {
      d[i][j] = house[i][j] + Math.min(d[i - 1][1], d[i - 1][2]);
    } else if (j == 1) {
      d[i][j] = house[i][j] + Math.min(d[i - 1][0], d[i - 1][2]);
    } else if (j == 2) {
      d[i][j] = house[i][j] + Math.min(d[i - 1][0], d[i - 1][1]);
    }
  }
}

console.log(Math.min.apply(null, d[n]));


// const [N, ...input2] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// const arr = input2.map((v) => v.split(" ").map(Number));

// for (let i = 1; i < N; i++) {
//   arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2]);
//   arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2]);
//   arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1]);
// }

// console.log(Math.min(...arr[N - 1]));
// return Math.min(...arr[N - 1]) + "";