const solution = (N, nums) => {
  const memo = [nums[0]];

  const lowerBound = (arr, size, target) => {
    let l = 0;
    let r = size - 1;

    while (l < r) {
      const cur = Math.floor((l + r) / 2);
      arr[cur] < target ? (l = cur + 1) : (r = cur);
    }
    return l;
  };

  for (let i = 1; i < N; i++) {
    const cur = nums[i];
    const memoSize = memo.length;
    if (cur > memo[memoSize - 1]) memo.push(cur);
    else {
      const li = lowerBound(memo, memoSize, cur);
      memo[li] = cur;
    }
  }

  console.log(memo.length);
};

let fs = require("fs");
let input = fs.readFileSync("12015.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let count = input[0];
let numbers = input[1].split(" ").map((x) => +x);


solution(count, numbers);
