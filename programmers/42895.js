function solution(N, number) {
  let answer = 0;
  let use = Array.from(new Array(9), () => new Set());
  console.log(use)
  if (N == number) return 1;
  else {
    use.forEach((element, index) => {
      if (index !== 0) element.add(Number(String(N).repeat(index)));
    });
    for (let i = 1; i <= 8; ++i) {
      for (let j = 1; j < i; ++j) {
        console.log("i,j", i, j);
        for (let first of use[j]) {
          for (let second of use[i - j]) {
            console.log("first, second", first, second);
            use[i].add(first + second);
            use[i].add(first - second);
            use[i].add(first * second);
            use[i].add(first / second);
          }
        }
      }
      for (k of use) {
        console.log(k);
      }
      if (use[i].has(number)) return i;
    }
    return -1;
  }
}
console.log(solution(5, 12));

//https://itprogramming119.tistory.com/entry/JavaScript-54-%EC%A0%84%EB%8B%AC%EB%90%9C-%EA%B0%92%EC%9D%B4-%EC%A0%95%EC%88%98%EC%9D%B8%EC%A7%80%EB%A5%BC-%ED%99%95%EC%9D%B8%ED%95%98%EB%8A%94-NumberisInteger-%EB%A9%94%EC%86%8C%EB%93%9C
//https://webisfree.com/2020-09-09/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4%EA%B0%92-0%EC%9C%BC%EB%A1%9C-%EC%B4%88%EA%B8%B0%ED%99%94-%EB%B0%A9%EB%B2%95
//https://velog.io/@numerok/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-N%EC%9C%BC%EB%A1%9C-%ED%91%9C%ED%98%84-JavaScript
