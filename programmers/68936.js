function solution(arr) {
  let total = [0, 0];
  const compress = (arr, n) => {
    const value = arr[0][0];
    if (n == 1) {
      total[value] += 1;
      return;
    }

    const sum = arr.reduce((s, r) => s + r.reduce((a, b) => a + b), 0);
    if (sum == 0 || sum == n * n) {
      total[value] += 1;
      return;
    }

    const divide1 = arr.slice(0, n / 2);
    const divide2 = arr.slice(n / 2);

    compress(
      divide1.map((v) => v.slice(0, n / 2)),
      n / 2
    );
    compress(
      divide1.map((v) => v.slice(n / 2)),
      n / 2
    );
    compress(
      divide2.map((v) => v.slice(0, n / 2)),
      n / 2
    );
    compress(
      divide2.map((v) => v.slice(n / 2)),
      n / 2
    );
  };

  compress(arr, arr.length);
  return total;
}
console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);

console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
);
// 4등분 후, 등분 안의 값이 모두 같은 값이면, 통합 후 나누지 않음.
// 모두 같은 경우가 아니면 또 4등분
//n + 1 번 시행할때 탈출
