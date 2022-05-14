const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "input/24444.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let info = input[0].split(" ").map((x) => +x);
let N = info[0];
let start = info[2];
let connect = input.slice(1).map((x) => x.split(" ").map((y) => +y));

//N개의 정점과 M개의 간선으로 이루어져있고 무방향그래프이고 정점번호는 1부텨N까지, 가중치 1
//정점 R에서 시작하여 너비우선탐색으로 노드를 방문할 경우 노드의 방문순서 출력

function bfs(N, start, connect) {
  let visited = Array(N + 1).fill(false);
  let queue = [start];
  connect.sort();
  let graph = Array.from(Array(N + 1), () => new Array());
  for (i = 0; i < connect.length; i++) {
    graph[connect[i][0]].push(connect[i][1]);
    graph[connect[i][1]].push(connect[i][0]);
  }
  visited[start] = true;
  let answer = Array(N + 1).fill(0);
  let print = [0];
  while (queue.length) {
    let now = queue.shift();
    print.push(now);
    for (i = 0; i < graph[now].length; i++) {
      if (visited[graph[now][i]] == false) {
        visited[graph[now][i]] = true;
        queue.push(graph[now][i]);
      }
    }
  }

  for (i = 1; i < answer.length; i++) {
    answer[i] = print.indexOf(i) != -1 ? print.indexOf(i) : 0;
    console.log(answer[i]);
  }
}
console.log(bfs(N, start, connect));
