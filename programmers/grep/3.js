function solution(replies, n, k) {
  let answer = Array(replies.length).fill(1);

  for (i = 0; i < replies.length; i++) {
    let repeat = 0;
    let plus = 0;
    for (j = 0; j < replies[i].length; j++) {
      repeat = recursive(n, k, replies[i], replies[i].slice(j, j + n + plus));
      if (repeat) {
        answer[i] = 0;
        break;
      } else {
        if (n + plus < Math.ceil(replies[i].length / k)) {
          plus += 1;
          j--;
        } else {
          plus = 0;
        }
      }
    }
  }
  console.log(answer);

  return answer;
}
function recursive(n, k, repL, word) {
  let a = repL.replace(new RegExp(word, "g"), " ".repeat(word.length));
  let IsTrue = a.replace(new RegExp(" ".repeat(k * n), "g"), "").length;
  if (word.length - IsTrue.length <= word.length - k * n) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

console.log(
  solution(
    ["AFFDEFDEFDEEC", "ABABABABBCCEF", "FFFFFFFFFFFFF", "FCBBBFCBBECBB"],
    3,
    2
  ) == [0, 0, 0, 1]
);

console.log(
  solution(
    ["AFFDEFDEFDEEC", "ABABABABBCCEF", "FFFFFFFFFFFFF", "FCBBBFCBBECBB"],
    2,
    4
  ) == [1, 0, 0, 1]
);
console.log(
  solution(["FFCCAAFCCAAA", "AAAABBBBCCCC", "ABCABCABCABC"], 4, 2) == [0, 1, 0]
);
console.log(
  solution(["FFCCAAFCCAAA", "AAAABBBBCCCC", "ABCABCABCABC"], 3, 3) == [1, 1, 0]
);

//즉, 길이 n 이상의 응답패턴이 k번 이상 연속되면 불량 설문지로 간주하기로 했습니다.
// 설문 결과를 담은 문자열 배열 replies, 불량의 기준이 되는 정수형 변수 n, k가 매개변수로 주어집니다. 이때, 각 설문지에 대해서, 불량/정상 여부를 배열에 담아서 return 하도록 solution 함수를 완성해주세요. 1번 설문지부터 마지막 설문지까지 검사해서 차례대로 불량이면 0, 정상이면 1을 담아서 return 합니다.
// replies의 길이(=설문지의 개수)는 1 이상 100 이하입니다.
// replies의 원소는 응답자의 설문지를 나타냅니다.
// 1번 설문지부터 마지막 설문지까지의 결과가 차례대로 담겨 있습니다.
// replies의 원소는 길이 1 이상 400 이하인 문자열입니다.
// 즉, 설문 문항의 수는 1개 이상 400개 이하입니다.
// replies의 원소들의 길이는 모두 같습니다.
// replies의 원소는 'A' ~ 'F' 사이의 6개 대문자 알파벳으로만 이루어진 문자열입니다.
// n은 2 이상 설문 문항의 수 이하인 자연수입니다.
// k는 2 이상 설문 문항의 수 이하인 자연수입니다.
