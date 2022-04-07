function solution(bridge_length, weight, truck_weights) {
  let queue = [...truck_weights];
  let bridge = new Array(bridge_length).fill(0);
  let second = 0;
  while (queue.length || bridge.length) {
    bridge.shift();
    if (
      bridge.length == bridge_length ||
      queue[0] +
        bridge.reduce((accumulator, current) => accumulator + current, 0) >
        weight
    ) {
      bridge.push(0);
    } else {
      if (queue.length) bridge.push(queue.shift());
    }
    second += 1;
  }
  return second;
}

console.log(8, solution(2, 10, [7, 4, 5, 6])); 
console.log(101, solution(100, 100, [10]));
console.log(110, solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));

console.log(4, solution(1, 2, [1, 1, 1]));
console.log(4, solution(1, 1, [1, 1, 1]));
console.log(10, solution(4, 2, [1, 1, 1, 1]));
console.log(6, solution(3, 3, [1, 1, 1]));
console.log(10, solution(3, 1, [1, 1, 1]));
console.log(14, solution(5, 5, [1, 1, 1, 1, 1, 2, 2]));
console.log(18, solution(7, 7, [1, 1, 1, 1, 1, 3, 3]));
console.log(19, solution(5, 5, [1, 1, 1, 1, 1, 2, 2, 2, 2]));
console.log(19, solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1]));
