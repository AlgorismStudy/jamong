let set = new Set(); //소수 저장 set (중복 없이 저장하기 위해서 사용)

function solution(numbers) {
  let arr = numbers.split("");
  let visited = new Array(arr.length); //자릿수 방문 체크 배열

  for (let i = 1; i <= arr.length; i++) {
    let strNum = new Array(arr.length); //숫자 조합 저장 배열
    perm(arr, visited, arr.length, i, 0, strNum);
  }

  return set.size;
}

//순열 : 순서 O, 중복 X
// n - 총 숫자 개수, r - 몇개를 뽑을 것인지(자릿수), depth - 현재 뽑을 개수, strNum - 현재 조합된 숫자
function perm(arr, visited, n, r, depth, strNum) {
  if (depth == r) {
    let str = strNum.join("");

    if (isPrime(Number(str))) {
      //해당 숫자가 소수인지 판별
      set.add(Number(str));
    }

    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      //사용하지 않은 숫자면 뽑기
      visited[i] = true;
      strNum[depth] = arr[i];
      perm(arr, visited, n, r, depth + 1, strNum);
      visited[i] = false;
    }
  }
}

//소수 판별 함수
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  let len = Math.sqrt(num);
  for (let i = 2; i <= len; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}
