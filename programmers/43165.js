function solution(numbers, target) {
  let answer = 0;
  let count = 0;

  function dfs(result, index) {
    if (index == numbers.length) {
      if (result == target) {
        count += 1;
        return;
      }
      //   if (result - numbers[index] == target) {
      //     count += 1;
      //     return;
      //   }
      return;
    } else {
      console.log("1:", index, result, numbers[index + 1]);
      dfs(result + numbers[index], index + 1);
      console.log("2:", index, result, numbers[index + 1]);
      dfs(result - numbers[index], index + 1);
    }
  }
  dfs(0, 0);
  console.log("count", count);
  answer = count;
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));

console.log(solution([4, 1, 2, 1], 4));
