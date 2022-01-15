const fs = require("fs");
const [N,K] = fs
  .readFileSync("1697.txt")
  .toString()
  .trim()
  .split(" ")
    .map((x) => +x);
console.log(N,K)
const visited = new Array(100100).fill(false);
const queue = []
let v = 0;
//수빈은 앞 뒤로 X+1 혹은 X-1로 이동. 순간이동시 2*X의 위치로 이동
//수빈이가 동생 찾는 가장 빠른 시간 구하기

visited[N] = true;
queue.push([N,0]);

while (queue.length) { 
    const [cur, time] = queue.shift();
    if (cur == K) {
        console.log(time);
        break;
    }
    for (i of[cur-1,cur+1,cur*2]) {
        if (!visited[i] && i >=0 && i<=10000) {
            queue.push([i,time+1]);
            visited[i] = true;
        }
    }
    
        
    }


