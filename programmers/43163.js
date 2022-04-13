function solution(begin, target, words) {
  var answer = Infinity;
  const visited = {};
  f(begin, 0);
  function f(curr, cnt) {
    if (curr === target) {
      answer = Math.min(cnt, answer);
      return;
    }

    words.map((word, i) => {
      let j = word.length - 1;
      let diff = 0;
      while (j !== -1) {
        if (curr[j] !== word[j]) diff++;
        j--;
      }
      console.log(word,visited,visited[word])
      if (diff === 1 && !visited[word]) {
        visited[word] = 1;
        f(word, cnt + 1);
        visited[word] = 0;
      }
    });
  }
  return answer === Infinity ? 0 : answer;
}


console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));