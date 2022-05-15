function solution(n, text, second) {
  let answer = "";
  let queue = [...Array(n).fill("_"), ...text.replace(" ", "_").split("")];

  for (i = 0; i < second; i++) {
    queue.push(queue.shift());
  }
  answer = queue.slice(0, 6).join("");
  console.log(answer);
  return answer;
}

console.log(solution(6, "hi bye", 1) == "_____h");
console.log(solution(6, "hi bye", 2) == "____hi");
console.log(solution(6, "eunsunyee", 21) == "eunsun");
