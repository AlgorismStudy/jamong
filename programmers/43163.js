function solution(begin, target, words) {
  let answer = 0;
  if (!words.includes(target)) return 0;
  return solution2(begin, target, words, answer);
}

function solution2(begin, target, words, answer) {
  if (begin == target) return answer;

  if (!words.includes(target)) return 0;

  for (i = 0; i < words.length; i++) {
    let count = 0;
    for (j = 0; j < words[i].length; j++) {
      if (words[i][j] !== begin[j]) {
        count += 1;
      }
    }
    if (count == 1) {
      const next = words.splice(i, 1);
      return solution(next[0], target, words, answer + 1);
    }
    count = 0;
  }
  return 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
