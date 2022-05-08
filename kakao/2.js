function solution(queue1, queue2) {
  let answer = [0, 0];
  let balance =
    queue1.reduce((a, b) => a + b, 0) + queue2.reduce((a, b) => a + b, 0);
  console.log(balance) / 2;
  //queue1이 앞에서 빠지는것
    let reduceEl;
    let flag = 0;
    while (queue1.reduce((a, b) => a + b, 0) != balance) {
        if (flag = 1)
    reduceEl = queue1.shift();
    queue2.push(reduceEl);
    answer[0] += 1;
  }

  return answer;
}
console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]) == 2);
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]) == 7);
console.log(solution([1, 1], [1, 5]) == -1);
//한쪽이 빼는큐(뒤에서 빠짐)
//한쪽이 넣는큐(앞에서 빠짐)
//balance를 맞추는것이 중요!
//원형큐??
//3 2 7 2 || 4 6 5 1 => 앞에서 빼는것밖에 안됨
//4 6 5 1 ||  3 2 7 2
