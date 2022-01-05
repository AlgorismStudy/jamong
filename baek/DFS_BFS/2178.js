
const [yMax, xMax] = [4, 6];

const map = [
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
];

const stack = [[0, 0, 1]];

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];


while (stack.length) {
  const [x, y, dis] = stack.shift();

  for (let i = 0; i < 4; i++) {
    const xPos = x + dir[i][0];
    const yPos = y + dir[i][1];

    if (0 <= xPos && 0 <= yPos && xPos < xMax && yPos < yMax) {
      if (map[yPos][xPos] === 1) {
        map[yPos][xPos] = dis + 1;
        stack.push([xPos, yPos, dis + 1]);
      }
    }
  }
}

console.log(map[yMax - 1][xMax - 1]);
