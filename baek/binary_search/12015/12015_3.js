const solution = (N, nums) => {
  const memo = Array(N).fill(1);

  let max = 0;
  for (let li = 0; li < N; li++) {
    const lastVal = nums[li];
    for (let ti = 0; ti < li; ti++) {
      const targetVal = nums[ti];
      if (lastVal > targetVal && memo[ti] >= memo[li]) {
        memo[li] = memo[ti] + 1;
      }
    }
    if (memo[li] >= max) max = memo[li];
  }

  let tmp = [];
  let subMax = max;
  for (let mi = N; mi--; ) {
    const curM = memo[mi];
    if (curM !== subMax) continue;
    tmp.push(nums[mi]);
    subMax--;
  }

  console.log(max);
  console.log(tmp.reverse().join(" "));
};

let fs = require("fs");
let input = fs.readFileSync("12015.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let count = input[0];
let numbers = input[1].split(" ").map((x) => +x);

solution(count, numbers);

