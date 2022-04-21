function solution(n, computers) {
  let answer = 0;
  let network = Array.from(new Array(computers.length), () => []);
  for (k of network) {
    console.log(k);
  }
  for (i = 0; i < computers.length; i++) {
    for (j = i + 1; j < computers.length; j++) {
      if (computers[i][j] == computers[j][i]) {
        console.log("i,j", i, j);
        console.log("computers[i][j]", computers[i][j]);
        console.log("computers[j][i]", computers[j][i]);
        network[i].push(computers[i][j]);
        network[i].push(computers[j][i]);
      }
    }
  }
  for (k of network) {
    console.log(k);
  }

  return answer;
}
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// );

//네트워크 덩어리 개수
