//1번집, 2번집 다르다
//한칸씩 띄엄띄엄
//An = An-2 가능.
// An != An-1 or An+1. 같은 색상이 최소비용일지라도, 그 다음으로 큰값을 사용해야함.

const fs = require("fs");
const input = fs.readFileSync("1149.txt").toString().trim().split("\n");

const n = Number(input[0]);

const house = [];
const sorted_house = [];

let sums = 0;

for (i of input.slice(1)) {
  house.push(i.split(" ").map((x) => +x));
  sorted_house.push(
    i
      .split(" ")
      .map((x) => +x)
      .sort((a, b) => a - b)
  );
}

const d = [];
for (i = 0; i < n + 1; i++) {
    d.push({ color: 0, price: 1000 })
}
console.log(d[6])

d[1].price = sorted_house[0][0];
d[1].color = house[0].indexOf(d[1].price);
sums += d[1].price;
d[2].price = sorted_house[1][0];
d[2].color = house[1].indexOf(d[2].price);
if (d[2].color == d[1].color) {
  d[2].price = sorted_house[1][1];
  d[2].color = house[1].indexOf(d[2].price);
}

sums += d[2].price;

for (i = 3; i <= n; i++) {
  d[i].price = sorted_house[i - 1][0];
  d[i].color = house[i - 1].indexOf(d[i].price);
  if (d[i].color == d[i - 1].color) {
    d[i].price = sorted_house[i - 1][1];
    d[i].color = house[i - 1].indexOf(d[i].price);
  }

  sums += d[i].price;
}
console.log(sums);


d1: [26 40 83] d2: [57 49 60] d3: [13 1 99]
    [26 40 83] d2: [57+[2:40], 49+[1:26], 60+[1:26]] d3:[13+[2],1+[3],99+[2]][88,87,174][2,3,1]
    
1                          2                            1
        
d1: [26 40 83] d2: [57 49 60] d3: [13 1 99]
[87,98,141][26+[3:61],40+[1:58],83+[1:58]] [57+[2:1],49+[1:13],60+[2:1]]  [13 1 99]
[1,3,2]
                       1                  1                     2
d2[1] += min(d1[0], d1[2])

di = d[i - 1] 
//점화식 다시 세워서 풀기