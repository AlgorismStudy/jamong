function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  let now;

  for (i = 0; i < skill_trees.length; i++) {
    let queue = skill.split("");
    now = skill_trees[i];
    for (j = 0; j < now.length; j++) {
      let nowLetter = now[j];
      if (queue.includes(nowLetter)) {
        if (nowLetter != queue[0]) {
          answer -= 1;
          break;
        } else {
          queue.shift();
        }
      }
    }
  }

  console.log();
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]) == 2);

//커리에 없는 건 중간에 끼워넣어도 된다.
//가능한 스킬트리 개수는?
//queue 쓰면 될듯
