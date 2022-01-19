const fs = require("fs");
const input = fs.readFileSync("input/1932.txt").toString().trim().split("\n");
const n = Number(input.shift());
const A = input.map((x) => x.split(" ").map((x) => +x));

for (i = 1; i < n; i++) {
  let prev;
  for (j = 0; j <= i; j++) {
    if (j === 0) prev = A[i - 1][0];//가장왼쪽에있으면 부모의 가장 왼쪽 값
    else if (j === i) prev = A[i - 1][j - 1];//가장오른쪽값은 부모값
    else prev = Math.max(A[i - 1][j - 1], A[i - 1][j]);//왼쪽값과 현재 인덱스값 자리의 큰 부모값
     A[i][j] += prev;
  }
}
console.log(Math.max(...A[n-1]))

