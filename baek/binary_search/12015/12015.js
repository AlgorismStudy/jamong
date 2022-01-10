//여러 줄 입력

let fs = require("fs");
let input = fs.readFileSync("12015.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let count = input[0];
let numbers = input[1].split(" ").map((x) => +x);
console.log(count, numbers);
// 특정 원소가 어떤 부분 수열의 마지막 원소로 추가된다고 할때
// 그 원소가 앞의 원소들보다 큰 원소라면 새로운 최장증가부분수열이 생성된다.
// 그러면 이전까지의 최장증가 부분 수열길이에 1을 더한것이 그 수열의 최장증가부분수열길이가 된다.

//2중 for문 형태 코드로 구현할 수 있다. 시간복잡도는 O(N^2)
// 추가될때, 앞의원소와 비교하므로?
const solution = (N, nums) => {
  let max = 0;
  const memo = Array(N).fill(1);
  for (let li = 0; li < N; li++) {
    const lastVal = nums[li];
    for (let ti = 0; ti < li; ti++) {
      const targetVal = nums[ti];

      if (lastVal > targetVal && memo[ti] >= memo[li]) memo[li] = memo[ti] + 1;
    }
    if (memo[li] > max) max = memo[li];
  }
  console.log(max);
};

solution(count, numbers);
