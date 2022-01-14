//연속된 3개의 index밟을 수 없다
//1칸, 2칸씩 오를 수 있다.
//마지막 도착계단 반드시 밟는다

const fs = require("fs");
const [N, ...d] = fs
  .readFileSync("2579.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

/*
d[1] = [d[1]]
d[2] = [d[1]+d[2],d[2]]
d[3] = [d[1]+d[3],d[2]+d[3]]
d[4] = [d[2]+d[4],d[3]+d[4]]
d[5] = [d[3]+d[5],d[4]+d[5]]
2개 이전의 방법 중 가장 큰 값과 1개 이전의 방법중 가장 큰 값 중 가장큰 값에 현재 값을 저장.
*/

d[0] = [0,d[0]];
d[1] = [d[0][1] + d[1], d[1]];
console.log(0,d[0])
console.log(1,d[1])
let a = 0;
let b = 0;
for (i = 2; i < N; i++) {
    console.log(d[i])
  a = Math.max.apply(null,d[i - 2]);
  b = Math.max.apply(null,d[i - 1]);
    d[i] = [d[i] + a, d[i] + b];
    console.log(i,a,b,d[i])
}
