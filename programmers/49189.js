function solution(n, edge) {
  var answer = 0;
  return bfs(edge, 1, n);
}

function bfs(arr, start, end) {
  var visited = new Array(end + 1);
  var level = new Array(end + 1);
  var queue = [start]; //큐에 start 노드 넣기
  level[0] = 0;
  level[start] = 0; // 시작노드 자기자신의 level은 0
  visited[start] = true; // 방문체크
  var lev;
  while (queue.length) {
    //큐가 끝날때까지
    var node = queue.shift(); // 맨앞 노드 가져오기
    lev = level[node] + 1; //
    for (var edge of arr) {
      if (edge[0] == node && visited[edge[1]] == undefined) {
        //노드가 연결관계의 첫번째 노드이고 연결관계의 두번째 노드가 방문되지 않았을때
        queue.push(edge[1]); //큐에 두번째 노드 넣기
        visited[edge[1]] = true; //방문처리
        level[edge[1]] = lev; // 연결관계의 첫번째 노드의 level에 1 더한것을 level로 지정
      } else if (edge[1] == node && visited[edge[0]] == undefined) {
        //노드가 연결관계의 두번째 노드이고 첫번째 노드가 방문되지 않았을때
        queue.push(edge[0]); //큐에 넣기
        visited[edge[0]] = true; //첫번째 노드를 방문처리(두번째 노드는 이미 방문처리 되어있음)
        level[edge[0]] = lev; //두번째 노드로부터 1만큼 떨어져 있음을 의미
        //(node = 3, [2, 3]) 일때 node가 3이라는 것은 큐에 넣어질때 이미 방문처리가 되어있고, 2는 3과 1만큼 떨어져있으므로.
      }
    }
    console.log(level);
  }
  return level.filter((i) => i == lev - 1).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
