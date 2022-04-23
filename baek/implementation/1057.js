const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let N = +input[0]; //참가자수
let K = +input[1]; // 김지민 번호
let I = +input[2]; // 임한수 번호

function solution(N, K, I) {
  let answer;
  let K_step = 0; //최대 라운드 수
  let I_step = 0;

  while (K != 1 || I != 1) {
    if (K == I) {
      break;
    }
    if (K % 2 == 0) {
      K = K / 2;
      K_step += 1;
    } else {
      K = parseInt(K / 2) + 1;
      K_step += 1;
    }
    if (I % 2 == 0) {
      I = I / 2;
      I_step += 1;
    } else {
      I = parseInt(I / 2) + 1;
      I_step += 1;
    }
  }
  answer = Math.min(K_step, I_step);
  return answer;
}
console.log(solution(N, K, I));
