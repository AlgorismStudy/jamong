const fs = require("fs");
const input = fs.readFileSync("input/1236.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((x) => +x);
// 직사각형 모양의 성을 가지고 있다ㅓ.
// 1층은 보호되고있음
// 영식이는 모든 행과 열에 한명 이상의 경비가 있으면 좋다
// 몇명의 경비를 최소로 둘까

const map = input.slice(1).map((x) => x.split(""));
let y = Array(n).fill(0);
let x = Array(m).fill(0);
for (i = 0; i < n; i++) {
  for (j = 0; j < m; j++) {
    if (map[i][j] == "X") {
      x[j] = 1;
      y[i] = 1;
    }
  }
}

console.log(
  Math.max(y.filter((y) => y == 0).length, x.filter((x) => x == 0).length)
);
