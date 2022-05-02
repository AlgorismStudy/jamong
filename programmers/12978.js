// function solution(N, road, K) {
//   let answer = [];
//   let queue = [...road].map((x) => [...x]);
//   // let countArray = Array(N).fill(0);
//   let countArray = Array.from(Array(N), () => Array(N).fill(0));
//   while (
//     queue.length
//     // &&
//     // countArray.slice(1).filter((x) => x == 0).length !== 0
//   ) {
//     const start = Math.min(queue[0][0], queue[0][1]);
//     const dest = Math.max(queue[0][0], queue[0][1]);
//     const length = queue[0][2];
//     if (!countArray[start - 1] && start != 1) {
//       queue.push(queue.shift());
//       continue;
//     } else {
//       if (countArray[dest - 1] == 0)
//         countArray[dest - 1] = countArray[start - 1] + length;
//       else
//         countArray[dest - 1] = Math.min(
//           countArray[dest - 1],
//           countArray[start - 1] + length
//         );
//       queue.shift();
//     }
//   }
//   answer = countArray.filter((x) => x <= K && x != 0).length + 1;
//   console.log(answer, countArray);
//   return answer;
// }

function solution(N, road, K) {
  let arr = Array(N + 1).fill(Infinity);
  let adj = Array.from(Array(N + 1), () => Array());

  for (let [a, b, c] of road) {
    adj[a].push({ to: b, time: c });
    adj[b].push({ to: a, time: c });
  }

  let check = [{ to: 1, time: 0 }];
  arr[1] = 0;

  while (check.length) {
    let { to, time } = check.pop();

    adj[to].forEach((next) => {
      // next.to: 이동할 마을 / to: 현재 마을 / next.time: 이동할 마을까지 걸리는 시간
      if (arr[next.to] > arr[to] + next.time) {
        arr[next.to] = arr[to] + next.time;
        check.push(next);
      }
    });
  }

  return arr.filter((time) => time <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  ) == 4
);
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  ) == 4
);
