//가장 긴 증가하는 수열 구하기
//d[i]는 d[i-1]보다 수가 크다면 d[i-1]+1을 해준다.

const fs = require("fs");
const input = fs.readFileSync("11053.txt").toString().trim().split("\n");
const n = Number(input[0]);
const A = input[1].split(" ").map((x) => +x);

if (n == 1) {
  console.log(1);
} else {
  let d = new Array(n + 1).fill(1);
  let value = [];
  d[1] = 1;

  for (i = 2; i <= n; i++) {
    value = [];

    for (j = 1; j < i; j++) {
      if (A[i - 1] > A[j - 1]) {
        value.push(d[j] + 1);
        d[i] = Math.max.apply(null, value);
      }
    }
  }
  console.log(d);
}
