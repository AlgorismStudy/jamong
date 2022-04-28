const fs = require("fs");
const input = fs.readFileSync("input/1058.txt").toString().trim().split("\n");
const N = +input[0];
const graph = input.slice(1).map((v) => v.split(""));

let visited = Array.from(Array(N), () => Array(N).fill(0));

for (k = 0; k < N; k++) {
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      if (i === j) {
        visited[i][j] = 0;
        continue;
      }
      if (graph[i][j] === "Y") {
        visited[i][j] = 1;
      } else if (graph[i][k] === "Y" && graph[k][j] === "Y") {
        visited[i][j] = 1;
      }
    }
  }
}

let result = 0;
for (i = 0; i < N; i++) {
  let sumV = visited[i].reduce((a, c) => a + c);
  result = Math.max(result, sumV);
}

console.log(result);
