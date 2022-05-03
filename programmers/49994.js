function solution(dirs) {
  let answer = 0;
  let board = Array.from(Array(11), () => Array(11).fill(0));
  let dirMap = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  let now = [5, 5];
  //   board[5][5] = 1;
  for (i = 0; i < dirs.length; i++) {
    let order = dirs[i];
    let expectY = now[0] + dirMap[order][0];
    let expectX = now[1] + dirMap[order][1];
    let IsFirst;
    if ((order == "U" || order == "D") && expectY < 11 && expectY > -1) {
      now = [expectY, now[1]];
      IsFirst = board[expectY][now[1]] == 0 ? 1 : 0;
      answer += IsFirst;
      board[expectY][now[1]] = 1;
    } else if ((order == "L" || order == "R") && expectX < 11 && expectX > -1) {
      now = [now[0], expectX];
      IsFirst = board[now[0]][expectX] == 0 ? 1 : 0;
      answer += IsFirst;
      board[now[0]][expectX] = 1;
    }
  }
  console.log(answer);

  return answer;
}

console.log(solution2("ULURRDLLU") == 7);
console.log(solution2("LULLLLLLU") == 7);

/*
U: 위쪽으로 한 칸 가기
D: 아래쪽으로 한 칸 가기
R: 오른쪽으로 한 칸 가기
L: 왼쪽으로 한 칸 가기

좌표평면 경계 넘어가면 무시

*/

///board로 풀면 안되는 이유 : 상자를 닫는경우 1을 추가해야하는데(지나가지 않은 길을 지나가는거임), 이거는 방문 노드처럼 표현을 해버림.
//따라서 Set을 써서 Set에 경로시작점과 도착점을 같이 넣어서 저장해야함.

function solution2(dirs) {
  let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let now = [0, 0];
  let route = new Set();

  for (let dir of dirs) {
    let nowX = now[0] + move[dir][0];
    let nowY = now[1] + move[dir][1];

    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

    route.add("" + now[0] + now[1] + nowX + nowY);
    route.add("" + nowX + nowY + now[0] + now[1]);

    now = [nowX, nowY];
  }
  console.log(route);

  return route.size / 2;
}
