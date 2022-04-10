function solution(call) {
  let call2 = call;
  let pattern = call2[0];
  let patternArray = [];

  for (i = 0; i < call.length; i++) {
    pattern = call2[i].toLowerCase();
    const count = call2.split(pattern).length - 1;
    patternArray.push([pattern, count]);
  }

  patternArray = [...new Set(patternArray.join("|").split("|"))].map((v) =>
    v.split(",")
  );

  let maxCount = 0;

  for (i of patternArray) {
    if (maxCount < i[1]) {
      maxCount = i[1];
      console.log(maxCount);
    }
  }

  for (i of patternArray.filter((i) => i[1] == maxCount)) {
    const regex = new RegExp(i[0], "gi");
    call2 = call2.replace(regex, "");
  }

  return call2;
}

console.log("def", solution("abcabcdefabc"));
console.log("xyz", solution("abxdeydeabz"));
console.log("bcbc", solution("abcabca"));
console.log("BCbc", solution("ABCabcA"));
