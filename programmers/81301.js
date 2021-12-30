function solution(s) {
  let answer = "";
  const dict = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let container = "";
  const dict_list = Object.keys(dict);
  for (i of s) {
    if (isNaN(i)) {
      container += i;
    } else if (!isNaN(i)) {
      answer += i;
    }
    if (dict_list.includes(container)) {
      answer += dict[container];
      container = "";
    }
    console.log(container, answer);
  }

  return answer;
}

console.log(solution("one4seveneight"));
