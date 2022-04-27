const fs = require("fs");
const input = fs.readFileSync("input/1058.txt").toString().trim().split("\n");


const N = input[0];
const relation = input.slice(1);
console.log(N, relation)


for (let i = 0; i < relation.length; i++){
    for (let j = 0; j < relation.length; i++){
        dfs(relation[i][j],i,j, 0);
    }
}
function dfs(friend, depth) {

    
}