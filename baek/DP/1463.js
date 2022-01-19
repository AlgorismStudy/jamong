const fs = require("fs");
const N =
    Number(fs.readFileSync("1463.txt").toString().trim());
console.log(N);
//정수 N이 주어졌을 때, 3이나 2로 나누어떨어지면 3이나 2로 나누고, 1을 빼는 연산
//위 연산 3개를 적절히 사용하여 1 만듦.

const d = new Array(N + 1).fill(0);
for (i = 2; i <= N; i++) {
  d[i] = d[i - 1] + 1;
  //그 전 수에 1을 더하는값으로 초기화(그 전 수 기준으로는 1을 더하는게 가장 최소)
  if (i % 2 == 0) {
    d[i] = Math.min(d[i], d[i / 2] + 1);
  }
  if (i % 3 == 0) {
    d[i] = Math.min(d[i], d[i / 3] + 1);
  }
}

console.log(d[N]);
