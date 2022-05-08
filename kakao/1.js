function solution(survey, choices) {
  let answer = "";
  let answerArr = [0, 0, 0, 0];
  let num;
  for (i = 0; i < survey.length; i++) {
    if (survey[i][0] == "R" || survey[i][0] == "T") {
      num = choices[i] - 4;
      answerArr[0] += survey[i][0] == "R" ? num : -num;
    }
    if (survey[i][0] == "C" || survey[i][0] == "F") {
      num = choices[i] - 4;
      answerArr[1] += survey[i][0] == "C" ? num : -num;
    }
    if (survey[i][0] == "J" || survey[i][0] == "M") {
      num = choices[i] - 4;
      answerArr[2] += survey[i][0] == "J" ? num : -num;
    }
    if (survey[i][0] == "A" || survey[i][0] == "N") {
      num = choices[i] - 4;
      answerArr[3] += survey[i][0] == "A" ? num : -num;
    }
  }
  let charArr = ["RT", "CF", "JM", "AN"];
  for (i = 0; i < answerArr.length; i++) {
    if (answerArr[i] < 0 || answerArr[i] == 0) {
      answer += charArr[i][0];
    } else {
      answer += charArr[i][1];
    }
  }
  return answer;
}
console.log(
  solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]) == "TCMA"
);
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]) == "RCJA");
//성격 유형(RT,CF,JM,AN)
//선택지	성격 유형 점수
// 매우 비동의	네오형 3점
// 비동의	네오형 2점
// 약간 비동의	네오형 1점
// 모르겠음	어떤 성격 유형도 점수를 얻지 않습니다
// 약간 동의	어피치형 1점
// 동의	어피치형 2점
// 매우 동의	어피치형 3점
// 크기는 고정, 둘중 한명이 동의, 비동의 이건 바뀜
//각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다.
//점수 값으면 사전순으로.() => .sort()메소드 사용
//R, C,J,A
//판단지표와 각 판단지표에 대한 숫자 주어짐.
//비-0-동
//각각 -4를 해서, 들어오는숫자를 1이면 동의쪽, -1이면 비동의쪽,
//[0,0,0,0]
