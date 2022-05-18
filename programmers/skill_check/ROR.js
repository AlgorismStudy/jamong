function solution(maps) {
  let answer = -1;
  let queue = [[0, 0, 1]];
  let check = Array.from(Array(5), () => Array(5).fill(0));
  let xpos = [0, 0, 1, -1];
  let ypos = [1, -1, 0, 0];
  while (queue.length) {
    let cor = queue.shift();
    console.log(cor);
    let cnt = cor[2];
    if (cor[0] == 4 && cor[1] == 4) {
      console.log(cnt);
      answer = cnt;
      break;
    }
    for (let i = 0; i < 4; i++) {
      let x = cor[1] + xpos[i];
      let y = cor[0] + ypos[i];

      if (x < 0 || y < 0 || x > 4 || y > 4) {
        continue;
      }
      if (check[y][x] || !maps[y][x]) {
        continue;
      }
      check[y][x] = 1;
      queue.push([y, x, cnt + 1]);
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]) == 11
);

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ]) == -1
);
