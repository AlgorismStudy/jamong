function solution(tstring, variables) {
  let answer = "";

  //varObject  설정
  let varObject = {};
  for (i of variables) {
    const stringKey = i[0];
    varObject[stringKey] = i[1];
  }

  let listTstring = tstring.split(" ");

  //listTstring에 참조값 적용

  for (i = 0; i < listTstring.length; i++) {
    if (listTstring[i].includes("{")) {
      if (
        Object.keys(varObject).includes(
          listTstring[i].replace("{", "").replace("}", "")
        )
      ) {
        listTstring[i] = applyVariable(
          varObject,
          listTstring[i].replace("{", "").replace("}", ""),
          listTstring[i]
        );
      }
    }
  }

  answer = listTstring.join(" ");

  return answer;
}

function applyVariable(varObject, fixed, varOfString) {
  if (varOfString == varObject[fixed]) {
    return varOfString;
  }
  if (
    varObject[fixed].includes("{") &&
    Object.keys(varObject).includes(
      varObject[fixed].replace("{", "").replace("}", "")
    )
  ) {
    return applyVariable(
      varObject,
      varObject[fixed].replace("{", "").replace("}", ""),
      varOfString
    );
  }
  return varObject[fixed];
}

console.log(
  solution("this is {template} {template} is {state}", [
    ["template", "string"],
    ["state", "changed"],
  ]) == "this is string string is changed"
);

console.log(
  solution("this is {template} {template} is {state}", [
    ["template", "string"],
    ["state", "{template}"],
  ]) === "this is string string is string"
);

console.log(
  solution("this is {template} {template} is {state}", [
    ["template", "{state}"],
    ["state", "{templates}"],
  ]) === "this is {templates} {templates} is {templates}"
);
console.log(
  solution("{a} {b} {c} {d} {i}", [
    ["b", "{c}"],
    ["a", "{b}"],
    ["e", "{f}"],
    ["h", "i"],
    ["d", "{e}"],
    ["f", "{d}"],
    ["c", "d"],
  ]) === "d d d {d} {i}"
);
