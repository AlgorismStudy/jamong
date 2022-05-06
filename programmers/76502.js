const pair = { "}": "{", "]": "[", ")": "(" };

function solution(s) {
  const arr = s.split("");
  let result = 0;
  const isValid = (arr) => {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i];
      if (pair[c] === undefined) stack.push(c);
      else {
        if (stack[stack.length - 1] !== pair[c]) return false;
        stack.pop();
      }
    }
    if (stack.length) return false;
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.push(arr.shift());
  }

  return result;
}

console.log(solution("[](){}", 3) == 3);
console.log(solution("}]()[{", 2) == 2);
console.log(solution("[)(]", 0) == 0);
console.log(solution("}}}", 0) == 0);
