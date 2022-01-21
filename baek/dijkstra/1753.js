//https://www.acmicpc.net/problem/1753
// 문제
// 방향그래프가 주어지면 주어진 시작점에서 다른 모든 정점으로의 최단 경로를 구하는 프로그램을 작성하시오. 단, 모든 간선의 가중치는 10 이하의 자연수이다.

// 입력
// 첫째 줄에 정점의 개수 V와 간선의 개수 E가 주어진다. (1 ≤ V ≤ 20,000, 1 ≤ E ≤ 300,000) 모든 정점에는 1부터 V까지 번호가 매겨져 있다고 가정한다. 둘째 줄에는 시작 정점의 번호 K(1 ≤ K ≤ V)가 주어진다. 셋째 줄부터 E개의 줄에 걸쳐 각 간선을 나타내는 세 개의 정수 (u, v, w)가 순서대로 주어진다. 이는 u에서 v로 가는 가중치 w인 간선이 존재한다는 뜻이다. u와 v는 서로 다르며 w는 10 이하의 자연수이다. 서로 다른 두 정점 사이에 여러 개의 간선이 존재할 수도 있음에 유의한다.

// 출력
// 첫째 줄부터 V개의 줄에 걸쳐, i번째 줄에 i번 정점으로의 최단 경로의 경로값을 출력한다. 시작점 자신은 0으로 출력하고, 경로가 존재하지 않는 경우에는 INF를 출력하면 된다.




const fs = require("fs");
const input = fs.readFileSync("/input/1753.txt").toString().trim().split("\n");

const [v, e] = input[0].split(" ").map((x) => +x);
const start = Number(input[1]);
const graph = input.slice(2).map((x) => x.split(" ").map((x) => +x));



const dijkstra = (n, adj) => {
  const dist = Array(n + 1).fill(false);
  const queue = [];

  queue.push({ to: 1, cost: 0 });
  dist[1] = 0;

  while (queue.length !== 0) {
    let { to, cost } = queue.shift();

    adj[to].map((nextNode) => {
      const nextCost = cost + 1;
      if (dist[nextNode] === false) {
        dist[nextNode] = nextCost;
        queue.push({ to: nextNode, cost: nextCost });
      }
    });
  }

  const max = Math.max(...dist);
  return dist.filter((num) => {
    return num === max;
  }).length;
};

function solution(n, edge) {
  let answer = 0;
  let adj = Array.from({ length: n + 1 }, () => []);

  // 인접 리스트 생성
  edge.forEach((route) => {
    adj[route[0]].push(route[1]);
    adj[route[1]].push(route[0]);
  });

  // 다익스트라
  answer = dijkstra(n, adj);
  return answer;
}


dijkstra(graph);
for (i = 1; i <= v; i++) {
  console.log(distance[i]);
}


