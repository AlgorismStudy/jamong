let fs = require("fs");

let input = fs.readFileSync("2470.txt").toString().split("\n");
let N = input[0];
let liquids = input[1].split(" ").map((x) => +x);

//0에 가까운 용액을 만들기
//일단 정렬하기

liquids.sort(function (f, s) {
  return f - s;
});
//[-99, -2, -1, 4, 98,100,110]
// console.log(liquids);

let head = liquids[0];
let tail = liquids[-1];
let zero = head + tail;
let i = 0;
let ans_H = liquids[0];
let ans_T = liquids[N - 1];
//head tail 중 먼저 head부터 ,양끝부터 왼쪽으로 훑는다.
//훑다가, 그 절대값이 더 커진경우, 그 뒤의 인덱스와 더한 값을 zero에 넣어준다.

// head를 증가시킨다.
// head를 증가한 경우, 아까 그 증가한 인덱스부터 왼쪽으로 훑는다.
// head가 양수인 경우, 자기 다음 수랑 더해보고 함수자체를 끝낸다.
if (tail <= 0) {
  ans_H = liquids[-2];
  ans_T = liquids[-1];
}
while (tail > 0) {
  head = liquids[i];
    tail = liquids.pop();
    //tail이 0보다 작으면 그 앞의 값과 더해서 zero로 설정.
  if (tail < 0) {
    head = liquids[-1];
    if (Math.abs(head + tail) <= zero) {
      zero = head + tail;
    } else break;
    break;
  }
    if (head >= 0) {
      tail = 
    if (Math.abs(head + tail) <= zero) {
      zero = head + tail;
    } else break;
  }
  if (Math.abs(head + tail) <= zero) {
    zero = head + tail;
  } else {
  }
}

console.log(ans_H, ans_T);

-10 - 9 - 8 - 7 - 6 - 5 - 4 1 2 3 4 5 
// retry                               