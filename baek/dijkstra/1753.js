//https://www.acmicpc.net/problem/1753
// 문제
// 방향그래프가 주어지면 주어진 시작점에서 다른 모든 정점으로의 최단 경로를 구하는 프로그램을 작성하시오. 단, 모든 간선의 가중치는 10 이하의 자연수이다.

// 입력
// 첫째 줄에 정점의 개수 V와 간선의 개수 E가 주어진다. (1 ≤ V ≤ 20,000, 1 ≤ E ≤ 300,000) 모든 정점에는 1부터 V까지 번호가 매겨져 있다고 가정한다. 둘째 줄에는 시작 정점의 번호 K(1 ≤ K ≤ V)가 주어진다. 셋째 줄부터 E개의 줄에 걸쳐 각 간선을 나타내는 세 개의 정수 (u, v, w)가 순서대로 주어진다. 이는 u에서 v로 가는 가중치 w인 간선이 존재한다는 뜻이다. u와 v는 서로 다르며 w는 10 이하의 자연수이다. 서로 다른 두 정점 사이에 여러 개의 간선이 존재할 수도 있음에 유의한다.

// 출력
// 첫째 줄부터 V개의 줄에 걸쳐, i번째 줄에 i번 정점으로의 최단 경로의 경로값을 출력한다. 시작점 자신은 0으로 출력하고, 경로가 존재하지 않는 경우에는 INF를 출력하면 된다.

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let VE = input[0].split(" ");
let v = +VE[0]; //정점의 개수
let startV = +input[1]; //시작번호
let uvws = [];
for (let i = 2; i < input.length; i++) {
  uvws.push(input[i].split(" ").map((e) => +e));
} //u에서 v로 가는 가중치 w 저장

let linkedInfo = (uvws) => {
  let links = Array(v + 1); //정점 개수만큼 크기의 array 생성
  uvws.forEach((edge) => {
    if (!links[edge[0]]) links[edge[0]] = []; //2차원배열로 형성
    links[edge[0]].push({
      vertex: edge[1], 
      cost: edge[2],  //v로 가는 가중치를 links[u]에 저장
    });
  });
  return links;
};

class MinHeap { //힙 구현
  constructor() {
    this.nodes = [];
  }

  insert(value) {
    this.nodes.push(value);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;

    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];
    if (parentNode.cost <= currentNode.cost) return;

    this.nodes[index] = parentNode;
    this.nodes[parentIndex] = currentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.nodes.length;
    let minimum = index;

    if (!this.nodes[rightChildIndex] && !this.nodes[leftChildIndex]) return;
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex].cost < this.nodes[minimum].cost) {
        minimum = leftChildIndex;
      }
      return;
    }

    if (this.nodes[leftChildIndex].cost > this.nodes[rightChildIndex].cost) {
      if (
        rightChildIndex <= length &&
        this.nodes[rightChildIndex].cost < this.nodes[minimum].cost
      ) {
        minimum = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex].cost < this.nodes[minimum].cost
      ) {
        minimum = leftChildIndex;
      }
    }

    if (minimum !== index) {
      let t = this.nodes[minimum];
      this.nodes[minimum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(minimum);
    }
  }
}

let dijkstra = (links, startV) => {
  let shortestPathTable = Array(v + 1).fill(Infinity);
  shortestPathTable[0] = -1; //0은 안씀
  shortestPathTable[startV] = 0; //최단경로테이블 시작노드는 자기자신이므로 0
  let minHeap = new MinHeap();
  const start = {
    vertex: startV,
    cost: 0,
  };
  minHeap.insert(start); // 첫번째 정점 힙에 넣기
  while (minHeap.nodes.length) {
    const selected = minHeap.extract(); //힙의 가장 앞의 노드 꺼내기
    const startVertex = selected.vertex,//
      beforeCost = selected.cost;
    if (links[startVertex] === undefined) continue; //노드에 연결된것이 없으면 다음 와일문
    if (shortestPathTable[startVertex] < beforeCost) continue;//힙에서 꺼낸 노드까지의 경로보다 최단경로테이블에 저장된 경로가 작으면 다음 와일문
    links[startVertex].forEach((edge) => {
      const { vertex, cost } = edge; //연결된것이 있고, 노드까지의 경로가 더 작은경우 vertex와 cost를 꺼내온다
      if (shortestPathTable[vertex] <= shortestPathTable[startVertex] + cost) //노드에 연결된 인접노드의 비용을 현재까지의 경로에 더한거보다, 인접노드까지의 비용이 더 작으면 다음 인접노드로 
        return;
      shortestPathTable[vertex] = shortestPathTable[startVertex] + cost;//비용더한게 더 작으면 갱신
      const next = {
        vertex,
        cost: shortestPathTable[startVertex] + cost,
      }; 
      minHeap.insert(next); // 힙에 넣기.
    });
  }
  return shortestPathTable;
};

let printAll = (shortestPathTable) => {
  let answer = "";
  for (let i = 1; i < shortestPathTable.length; i++) {
    if (shortestPathTable[i] === Infinity) answer += "INF" + "\n";
    else answer += shortestPathTable[i] + "" + "\n";
  }
  console.log(answer.trim());
};

let links = linkedInfo(uvws);
let table = dijkstra(links, startV);
printAll(table);