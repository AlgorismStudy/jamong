//circular queue
//앞사람 말한 단ㅓ의 마지막 문 시ㄱ.
//이전에 등장한 단ㅓ 재사용 불가
//2자 이상
//n명,
//번호와, 자신의 몇번째에 틸락하는지
//탈락자 없으면 [0,0]
function solution(n, words) {
  let answer = [];
  let queue = [];
  let wordLength = words.length;
  let i;
  let start = words[0][0];
  let now;
  for (i = 0; i < wordLength; i++) {
    now = words[i];
    if (now[0] != start || queue.includes(now)) {
      break;
    } else {
      queue.push(now);
      if (i == wordLength - 1) {
        return [0, 0];
      }
    }
    start = now[now.length - 1];
  }
  //3명이고, 9(3*3)번째에서 걸림. Math.ceil((i+1)/3) (i+1)%3 ==0 ? 3 : (i+1)%3
  //2명이고, 5(2*2 + 1)번째에서 걸림Math.ceil((i+1)/2) (i+1)%2
  answer = [(i + 1) % n == 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)];
  console.log(answer);
  return answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ]) == [3, 3]
);

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ]),
  [0, 0]
);

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]) ==
    [1, 3]
);

//front = (front+1) % size 인덱스에 담긴 데이터가 맨 앞의 것이다. dequeue시 이 인덱스의 것을 빼는것임. 그러면 빠진 자리가 front가 되겟지.
// (rear+1)%size == front 이면 가득차있는것임.왜냐면 rear 바로 앞이 front라는 뜻이므로.
//rear == front이면 비어있다는 뜻임.
//
