function solution(bricks, n, k) {
  let answer = 0;
  //   let bricksInfo = Array.from(Array(bricks.length + 1), () =>
  //     Array(bricks.length + 1).fill(0)
  //   );
  //   for (i = 0; i < bricks.length; i++) {
  //     bricksInfo[bricks[i]] = [...bricksInfo[bricks[i]], i];
  //   }
  let minA = bricks.length * n;

  for (j = 1; j < bricks.length - 1; j++) {
    let count = 0;
    let stack = [j];
    count = n - bricks[j];
    for (h = 1; h < bricks.length - 1; h++) {
      if (
        stack.includes(h) ||
        stack.map((x) => x + 1).includes(h) ||
        stack.map((x) => x - 1).includes(h)
      ) {
        continue;
      } else {
        stack.push(h);
        count += n - bricks[h];
      }
      if (stack.length == k - 1) {
        minA = Math.min(minA, count);
          stack.pop();
          count = n - bricks[j];

      }
    }
  }
  console.log(minA);

  return minA;
}

console.log(solution([1, 2, 5, 3, 1, 0, 2, 3], 6, 3) == 5);
console.log(solution([0, 1, 2, 3, 4], 5, 2) == 2);
console.log(solution([0, 1, 2, 3, 4, 3], 5, 2) == 2);
//높이가 n인 것이 k-1개가 되어야함
//인접해있는 것끼리 놓으면 안됨.
//
