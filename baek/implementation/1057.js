const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let N = +input[0]; //참가자수
let K = +input[1]; // 김지민 번호
let I = +input[2]; // 임한수 번호

function solution(N, K, I) {
  let step = 0;

  while (K != 1 || I != 1) {
    if (K == I) {
      break;
    }
    if (K % 2 == 0) {
      K = K / 2;
    } else {
      K = parseInt(K / 2) + 1;
    }
    if (I % 2 == 0) {
      I = I / 2;
    } else {
      I = parseInt(I / 2) + 1;
    }
    step += 1;
  }
  return step;
}
console.log(solution(N, K, I));
