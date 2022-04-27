const fs = require("fs");
const input = fs.readFileSync("input/1058.txt").toString().trim().split("\n");

const N = input[0];
const relation = input.slice(1);
let TFriend = new Array(relation.length).fill(
  new Array(relation.length).fill(0)
);
console.log(TFriend);
for (let i = 0; i < relation.length; i++) {
  for (let j = i; j < relation.length; j++) {
    console.log(relation[i][j]);
    if (relation[i][j] == "Y" && i != j) {
      //친구의 관계속으로 들어가기
      dfs(i, j, 1);
    } else {
      continue;
    }
  }
}
function dfs(origin, friend, depth) {
  if (depth == 3) return;
  for (let i = 0; i < relation.length; i++) {
    if (relation[friend][i] == "Y" && i != origin) {
      TFriend[origin][] += 1;
      dfs(origin, i, depth + 1);
    } else {
      continue;
    }
  }
}

console.log(TFriend);

//fail