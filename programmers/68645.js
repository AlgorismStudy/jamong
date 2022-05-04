function solution(n) {
  let blockCount = (n * (n + 1)) / 2;
  let answer = [];
  let snail = Array.from(new Array(n), (e, i) => new Array(i + 1).fill(0));
  let start = 0;
  let max_depth = n;
  let max_width = n;
  let count = 1;
  while (count != blockCount + 1) {
    for (i = start; i < max_depth; i++) {
      if (snail[i][start] == 0) {
        snail[i][start] = count;
        count += 1;
      } else {
        continue;
      }
    }

    for (j = start + 1; j < max_width; j++) {
      if (snail[max_depth - 1][j] == 0) {
        snail[max_depth - 1][j] = count;
        count += 1;
      } else break;
    }
    for (k = 1; k < max_depth - start; k++) {
      if (snail[max_depth - k - 1][max_width - k - 1] == 0) {
        snail[max_depth - k - 1][max_width - k - 1] = count;
        count += 1;
      } else break;
    }
    start += 1;
    max_depth -= 1;
  }
  for (i of snail) {
    answer.push(...i);
  }

  return answer;
}

// console.log(solution(4) == [1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
// console.log(solution(5) == [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]);
console.log(solution(3));

//n(n+1)/2
// 11,21,31,41,
//42, 43, 44,
//33, 22, 32

// 11,21,31,41...,51, ==> 최대 깊이까지 내려간다
//52, 53, 54, 55, ==>최대 넓이까지 증가한다.
//44, 33, 22(start + 1, start + 1),==> y,x를 각각 -1씩 하면서 올라가고,
//그다음 숫자가 채워져있으면 start += 1, 최대깊이 -= 1,
//32, 42(n - start, start + 1), ==>깊이 증가
//43 ==>최대 넓이까지 증가한다

function solution(n) {
  let graph = [];
  let answer = [];
  //초기값을 위해서 -1로 변수 지정
  let y = -1;
  let x = 0;
  let number = 1;
  // 요소가 모두 0인 배열 생성
  for (let i = 1; i < n + 1; i++) {
    let tmp = Array(i).fill(0);
    graph.push(tmp);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 밑으로 내려간다.
      if (i % 3 === 0) {
        y += 1;
        // 오른쪽으로 간다.
      } else if (i % 3 === 1) {
        x += 1;
        //위로 올라간다.
      } else {
        y -= 1;
        x -= 1;
      }
      graph[y][x] = number;
      number += 1;
    }
  }
  //graph[i]를 차례대로 answer에 추가
  for (let i = 0; i < n; i++) {
    answer = answer.concat(graph[i]);
  }

  return answer;
}
