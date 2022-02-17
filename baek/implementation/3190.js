const fs = require("fs");
const input = fs.readFileSync("input/3190.txt").toString().trim().split("\n");
const N = +input[0]; //보드의 크기
const K = +input[1]; // 사과의 개수
const apple = input
  .slice(2, 2 + K)
  .map((el) => el.split(" ").map((x) => +x - 1));
const L = input[2 + K]; //direction의 길이
const direction = input
  .slice(3 + K)
  .map((el) => ({ X: +el.split(" ")[0], C: el.split(" ")[1] }));
for (i = direction.length - 1; i > 0; i--) {
  direction[i].X -= direction[i - 1].X;
}
direction.push({ X: 10000, C: "D" });
//2차원 배열 생성

function solution(N, apple, direction) {
  const board = Array.from(Array(N), () => Array(N).fill(2));
  let x = 0;
  let y = 0;
  let head = [0, 0];
  let way = 0;
  let count = 1;
  const queue = [[0, 0]]; //맨앞은 꼬리, 맨 뒤는 머리
  for (i of apple) {
    board[i[0]][i[1]] = 1;
  }

  for (let l of direction) {
    //전진
    for (let j = 1; j <= l.X; j++) {
      if (way == 0) {
        //방향에 따라서 head지정
        x += 1;
      } else if (way == 1) {
        y += 1;
      } else if (way == 2) {
        y -= 1;
      } else if (way == 3) {
        x -= 1;
      }
      if (x == N || y == N || x == -1 || y == -1) return count;
      head = [y, x];

      let meet = 0;
      for (q of queue) {
        if (q[0] == head[0] && q[1] == head[1]) {
          meet += 1;
        }
      }

      queue.push(head); //큐 맨뒤에 머리지정
      if (queue.length >= 2 && meet) {
        //queue 길이가 1보다 길고 꼬리와 머리가 만나면
        return count;
      }
      if (board[head[0]][head[1]] == 1) {
        //사과가 있을때
        board[head[0]][head[1]] = 2;
      } else {
        //사과가 없을때
        if (queue.length >= 2) queue.shift(); //꼬리하나 없애기
      }

      count += 1;
    }
    if ((l.C == "D" && way == 2) || (l.C == "L" && way == 1)) way = 0;
    else if ((l.C == "D" && way == 0) || (l.C == "L" && way == 3)) way = 1;
    else if ((l.C == "D" && way == 3) || (l.C == "L" && way == 0)) way = 2;
    else if ((l.C == "D" && way == 1) || (l.C == "L" && way == 2)) way = 3;
  }

  return count;
}

console.log(solution(N, apple, direction));
