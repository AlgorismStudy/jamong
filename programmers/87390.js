function solution(n, left, right) {
  let board = Array.from(new Array(n), (_, i) => Array(n).fill(i + 1));
  for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
      board[j][i] = i + 1;
    }
  }
  const newBoard = board.flat().slice(left, right + 1);

  return newBoard;
}

// console.log(solution(3, 2, 5) == [3, 2, 2, 3]);
console.log(solution(4, 7, 14) == [4, 3, 3, 3, 4, 4, 4, 4]);

// n X n
// 모든 빈칸 n으로 채움 // array n으로 초기화
// i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
// 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
// 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다. : flat?
// arr[left],arr[left+1],...,arr[right]만 남기고 나머지는 지운ㄷ다. : slice
// 이렇게 만들어진 1차원 배열을 return
// 주로 BFS 나 DFS 문제를 풀면서 현재 위치를 다시 방문하지 않기 위한 2차원 배열을 만든다.
// 주어진 2차원 배열 데이터와 행, 열이 같고 true, false 값을 원소로 갖는 2차원 배열을 만들 때 아래와 같이 중첩 반복문을 사용해서 만들 수 있다.

//	실패 (signal: aborted (core dumped)) => 메모리 사용량 초과

function solution(n, left, right) {
  return [true].reduce((result, _) => {
    for (let idx = left; idx <= right; idx++) {
      result.push(Math.max(idx % n, Math.floor(idx / n)) + 1);
    }
    return result;
  }, []);
}


function solution(n, left, right) {
  const ans = [];

  while (left <= right) {
    ans.push(Math.max(Math.floor(left / n), left++ % n) + 1);
  }

  return ans;
}