const fs = require("fs");
const input = fs.readFileSync("input/18353.txt").toString().trim().split("\n");
let n = Number(input[0]);
let nums = new Array(n);
let dp = new Array(n + 1).fill(1);
nums = input[1].split(" ").map(Number);
nums.reverse();
// 최장 증가 부분 수열
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (nums[i] > nums[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
let ans =Math.max.apply(null,dp)
console.log(n - ans);