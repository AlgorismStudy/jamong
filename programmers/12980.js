function solution(n) {
  let ans = 0;
  let num = n;
  let count = 0;
  while (num !== 1) {
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num -= 1;
      count += 1;
    }
  }
  ans = count + 1;
  return ans;
}

console.log(solution(5) == 2);
console.log(solution(6) == 2);
console.log(solution(5000) == 5);

// K칸 점프(전진만 가능) or (현재 누적 거리) * 2로 순간이동
// 순간이동은 사용량 그대로. 점프는 칸수만큼 사용.
// 사용량 최솟값 return
//누적 거리 일단은 1은 잇어야함
//5면, 1사용, 2로 순간이동, 4 로 순간이동, 1만큼 점프
//6이면, 1사용,2로 순간이동,1 사용, 3*2 로 이동
//반대로 생각하기. n%2가 0인지 확인
//먼저 1 추가
// 2로 나누어떨어지면 n = n/2
//안나누어 떨어지면 1 추가(안나누어 떨어지는 수를 구하면 됨.)

//5000 == 5 * 1000


function solution(n) {
  if (n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => +a + +b);
}
