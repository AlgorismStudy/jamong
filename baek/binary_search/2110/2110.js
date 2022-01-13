const input = require("fs")
  .readFileSync("2110.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ");
const cor = input.slice(1);

// C개의 공유기를 N개의 좌표(cor)에 설치
//가장 인접한 두 공유기 사이의 거리를 가능한 크게 설치
//가장 인접한 두 공유기 사이의 최대거리 출력

//정렬
cor.sort((a, b) => a - b);

//일단 2개는 양끝에 둔다

const binarySearch = (cor) => {
  const start = cor[0];
  const end = cor[-1];
  let mid = Math.floor((start + end) / 2);
  const mark = [start,end];
  if (end < start) {
      mark.sort((a, b) => a - b);
      let ans = []
      for (i = 0; i < mid.length-1; i++){
          ans.push(mark[i + 1] - mark[i]);
      }
  }
  //오른쪽 인덱스가 왼쪽 인덱스보다 작아진 경우에도 target과 같으면 1,아니면 0
  if (cor[mid] > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }

  return binarySearch(list, target, left, right, mid);
};

console.log(binarySearch(cor));
