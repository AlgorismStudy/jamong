const fs = require("fs");
const [A, ...B] = fs.readFileSync("2110.txt").toString().trim().split("\n");
//
const [_, router] = A.split(" ").map((v) => +v);
//router만 필요.
let home = B.map((v) => +v).sort((a, b) => a - b);
//라우터 위치 정렬

let min = 1; //가장 짧은 길이
let mid = 0;
let max = home[home.length - 1] - home[0]; // 가장 긴 길이
let answer = 0;

let prev = home[0];
while (min <= max) {
  mid = Math.floor((min + max) / 2);
  let cnt = 1;
  prev = home[0];
  for (let i = 1; i < home.length; i++) {
    if (home[i] >= prev + mid) {
      cnt++;
      prev = home[i]; //시작점 변동
    }
  }
  if (cnt < router) {
    max = mid - 1;
  } else {
    min = mid + 1;
    if (mid > answer) answer = mid;
  }
}
console.log(answer);
