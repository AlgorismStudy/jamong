function solution(s) {
  let answer = [];
  let sL = s;
  let count = 0;
  let replaced;
  let cycle = 0;
  while (sL !== "1") {
    replaced = sL.replace(/0/g, "");
    count += sL.length - replaced.length;
    sL = replaced.length.toString(2);
    cycle += 1;
  }
  answer = [cycle, count];
  console.log(answer);
  return answer;
}

//x의 모든 0을 제거합니다.
//x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다
//예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.
//

console.log(solution("110010101001") == [3, 8]);
console.log(solution("01110") == [3, 3]);
console.log(solution("1111111") == [4, 1]);
