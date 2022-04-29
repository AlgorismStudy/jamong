function solution(n) {
  let answer = "";
  const system124 = [4, 1, 2];
  while (n) {
    answer = system124[n % 3] + answer;
    if (n % 3 == 0) n = n / 3 - 1;
    else n = Math.floor(n / 3);
  }

  return answer;
}

console.log(solution(1) == 1);
console.log(solution(2) == 2);
console.log(solution(3) == 4);
console.log(solution(4) == 11);
console.log(solution(10) == 41);
console.log(solution(11) == 42);
console.log(solution(12) == 44);
console.log(solution(13) == 111);
