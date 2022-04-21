const fs = require("fs");
const input = Number(fs.readFileSync("input/1526.txt"));
for (let i = input; i >= 4; i--) {
  let flag = true;
  let num = i;
  while (num != 0) {
    if (num % 10 == 4 || num % 10 == 7) {
        num = parseInt(num / 10);
    } else {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(i);
    break;
  }
}
