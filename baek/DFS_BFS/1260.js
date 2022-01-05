const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let n = 0;
let m = 0;
let start = 0;
rl.on("line", (line) => {
  if (!n) {
    [n, m, start] = line.split(" ").map(Number);
  } else {
    input.push(line);
    if (input.length === m) {
      main();
      process.exit();
    }
  }
});

const dfs = (start) => {
  visited[start] = true;//방문처리를 한다
  answer.push(start); //answer에 넣기

  for (let i = 0; i < edge[start].length; i++) {
    const next = edge[start][i]; //간선의 인접한 노드 
    if (next && !visited[next]) { //존재하고 방문하지 않았다면 그 노드를 시작점으로(스택에 넣기). //방문했다면 스택에 넣지 않음.
      dfs(next);
    }
  }
};

const bfs = (start) => {
  const queue = [];
  visited[start] = true;
  queue.push(start);
  answer.push(start);

  while (queue.length) {
    const cur = queue.shift();//큐에서 현노드를 빼줌과 동시에 가져온다.

    for (let i = 0; i < edge[cur].length; i++) {
      const next = edge[cur][i];// 인접한 노드의 다음 노드들 차례로
      if (next && !visited[next]) { // 노드가 존재하고, 방문을 안했을때 
        queue.push(next); // 큐에넣고
        answer.push(next); // 답에 넣는다
        visited[next] = true; // 방문처리
      }
    }
  }
};

let visited;
let edge;
let answer;

const main = () => {
  visited = new Array(n + 1).fill(false); //방문표시할 배열생성
  edge = []; // 간선배열
  answer = []; //답 배열
  for (let i = 1; i < n + 1; i++) {
    edge[i] = []; //2차원배열로 만들어줌
  }

  input.forEach((el) => {
    const [from, to] = el.split(" ").map(Number); // 한칸 공백 기준으로 배열을 만들음.
    edge[from].push(to); //간선의 연결된 각 노드에 인접한 노드를 넣어줌.
    edge[to].push(from);
  });

  edge.forEach((el) => {
    el.sort((a, b) => a - b); //오름차순으로 정렬
  });

  dfs(start);
  console.log(answer.join(" "));

  visited = new Array(n + 1).fill(false);
  answer = [];

  bfs(start);
  console.log(answer.join(" "));
};

