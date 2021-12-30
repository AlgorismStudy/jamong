function solution(priorities, location) {
    const length = priorities.length
    let left = priorities.length
    let engine = true
    let print = []
    let ret = 1;
    while (engine) {
        for (let i = 0; i < length; i++) {
            if (i < location && priorities[i] < priorities[location]) {
              //앞에있고 값이 작을때 : 뒤에껄 자르
              print = priorities.slice(i);
              priorities = [...priorities, ...print];
            }
            else if (i < location && priorities[i] >= priorities[location]) {//앞에있고 값이 클때
                ret += 1;
            }
            else if (i > location && priorities[i] > priorities[location]) {
                
            }
            else {
                
            }


        }
    }

  return ret;
}

console.log(solution([2, 1, 3, 2], 2));
// 체크배열 놓고 인덱스 비교
// 타겟한 원소를 0, 다른건 1
// 