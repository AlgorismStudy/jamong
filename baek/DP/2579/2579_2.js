//연속된 3개의 index밟을 수 없다
//1칸, 2칸씩 오를 수 있다.
//마지막 도착계단 반드시 밟는다

const fs = require("fs");
const [N, ...stair] = fs
  .readFileSync("2579.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

if (N == 1) console.log(stair[0]);
else {
  const dp = [];
  dp[0] = stair[0];
  dp[1] = stair[0] + stair[1];
  dp[2] = Math.max(stair[1] + stair[2], dp[0] + stair[2]);

  //현재 기준 3칸 밑에서 올라오는 것과, 2칸 밑에서 올라오는것 기준으로 큰값이 현재 값
  for (i = 3; i < N; i++) {
    dp[i] = Math.max(dp[i - 3] + stair[i - 1] + stair[i], dp[i - 2] + stair[i]);
  }
  console.log(dp[N - 1]);
}
