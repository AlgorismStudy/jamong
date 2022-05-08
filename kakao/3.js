function solution(alp, cop, problems) {
  let answer = 0;
  let alpp = alp;
  let copp = cop;
  let studyRet;
  let solveRet;
  let maxAl = Math.max(...problems.map((x) => x.filter((_, i) => i == 0)));
  let maxCo = Math.max(...problems.map((x) => x.filter((_, i) => i == 1)));

  for (i = 0; i < problems.length; ++i) {
    if (alpp < problems[i][0] || copp < problems[i][1]) {
      studyRet = study(alpp, copp, problems[i][0], problems[i][1]);
      console.log(alpp, problems[i][0]);
      solveRet = solve(alpp, copp, problems);

      if (
        alpp + solveRet[0] >= problems[i][0] &&
        copp + solveRet[1] >= problems[i][1]
      ) {
        answer += solveRet[2];
        alpp += solveRet[0];
        copp += solveRet[1];
      } else if (
        alpp + studyRet[0] >= problems[i][0] &&
        copp + studyRet[1] >= problems[i][1]
      ) {
        answer += studyRet[2];
        alpp += studyRet[0];
        copp += studyRet[1];
      } else {
        answer += solveRet[2];
        alpp += solveRet[0];
        copp += solveRet[1];
        i--;
        continue;
      }
    }
    if (alpp >= maxAl || copp >= maxCo) {
      break;
    }
  }

  return answer;
}

function solve(alpp, copp, problems) {
  let alco = [0, 0, 0];
  for (i of problems) {
    if (alpp >= i[0] && copp >= i[1]) {
      alco[0] = i[2];
      alco[1] = i[3];
      alco[2] = i[4];
      break;
    }
  }

  return alco;
}

function study(alpp, copp, alppT, coppT) {
  let time = [0, 0, 0];
  if (alppT > alpp) {
    time[0] += alppT - alpp;
    time[2] += alppT - alpp;
  }
  if (coppT > copp) {
    time[1] += coppT - copp;
    time[2] += coppT - copp;
  }
  return time;
}
console.log(
  solution(10, 10, [
    [10, 15, 2, 1, 2],
    [20, 20, 3, 3, 4],
  ]) == 15
);
console.log(
  solution(0, 0, [
    [0, 0, 2, 1, 2],
    [4, 5, 3, 1, 2],
    [4, 11, 4, 0, 2],
    [10, 4, 0, 4, 2],
  ]) == 13
);
//알고력, 코딩력,문제정보
//높이기 위해 1,1씩 필요
//현재 풀수잇는 문제를 하나 풀어 알고 코딩력 높이기
//문제 하나 푸는데는 시간이 필요. 같은 문제 여러번 풀기 가능
//모든 문제 푸는 알고 코딩력 얻는 최단시간 구하기
// 시간을 갖거나, 여러번 풀거나.
// [alp_req, cop_req, alp_rwd, cop_rwd, cost]
// 공부를 하거나, 여러번 풀거나의 최소값을 구하는게 목적
//모든 문제들을 1번 이상씩 풀 필요는 없습니다.
//당신은 주어진 모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단시간을 구하려 합니다.
