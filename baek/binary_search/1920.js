const input = require("fs")
  .readFileSync("1920.txt")
  .toString()
  .trim()
  .split("\n");

const [N, A, M, B] = input.map((v) => v.split(" ").map((x) => Number(x)));

A.sort((a, b) => a - b);

// 이분 탐색
const binarySearch = (list, target, left, right, mid) => {
  mid = Math.floor((left + right) / 2);

  if (right < left) {
    return list[mid] == target ? 1 : 0;
  }
//오른쪽 인덱스가 왼쪽 인덱스보다 작아진 경우에도 target과 같으면 1,아니면 0
  if (list[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }

  return binarySearch(list, target, left, right, mid);
};

const result = B.map((v) => binarySearch(A, v, 0, A.length - 1, 0));

console.log(result.join("\n"));
