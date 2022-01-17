const fs = require("fs");
const input = fs.readFileSync("input/14501.txt").toString().trim().split("\n");
const n = Number(input[0]);
const plans = input.slice(1).map((x) => x.split(" ").map((x) => +x));

const d = new Array(n).fill(0);
for (let i = 0; i < n; i++) {
  const [cost, profit] = plans[i];
  if (i + cost > n) continue;//n보다 plan의 cost + i 면 기한내에 일을 못하므로 다음포문
  d[i] = d[i] + profit; //그게 아니면 d[i]에 profit저장
  for (j = i + cost; j < n; j++) {
    d[j] = Math.max(d[j], d[i]);//i날 +cost날 이후에 저장.
  }
}

console.log(Math.max(...d));
