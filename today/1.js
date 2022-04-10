function solution(path) {
  let answer = [];
  let start = path[0];
  let count = 1;
  let time = 0;
  let ChangedTime = 0;
  for (i = 1; i < path.length; i++) {
    time += 1;
    const now = path[i];
    if (now == start) {
      count += 1;
    } else {
      const direction = whichDirection(path[i - 1], now);
      if (count <= 5) {
        answer.push(
          `Time ${ChangedTime}: Go straight ${count}00m and turn ${direction}`
        );
      } else {
        answer.push(
          `Time ${
            ChangedTime + (count - 5)
          }: Go straight 500m and turn ${direction}`
        );
      }
      count = 1;
      ChangedTime = time;
      start = now;
    }
  }
  return answer;
}

function whichDirection(last, next) {
  if (last == "N") {
    if (next == "W") {
      return "left";
    } else {
      return "right";
    }
  }
  if (last == "E") {
    if (next == "N") {
      return "left";
    } else {
      return "right";
    }
  }
  if (last == "S") {
    if (next == "E") {
      return "left";
    } else {
      return "right";
    }
  }
  if (last == "W") {
    if (next == "N") {
      return "left";
    } else {
      return "right";
    }
  }
}
console.log(
  [
    "Time 0: Go straight 300m and turn right",
    "Time 3: Go straight 100m and turn left",
    "Time 5: Go straight 500m and turn left",
  ],
  solution("EEESEEEEEENNNN")
);
console.log(
  [
    "Time 1: Go straight 500m and turn right",
    "Time 6: Go straight 300m and turn right",
  ],
  solution("SSSSSSWWWNNNNNN")
);
