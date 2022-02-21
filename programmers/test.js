function solution(tickets) {
  let v_list = [{ i: 0, next: tickets[0][1] }];
  for (i = 1; i < tickets.length; i++) {
    if (tickets[i][0] == tickets[0][0]) {
      v_list.push({ i: i, next: tickets[i][1] });
    }
  }
  v_list.sort((a, b) => {
    return a.next.toLocaleLowerCase() - b.next.toLocaleLowerCase() > 0 ? 1 : -1;
  });
  console.log(v_list);

  let v = v_list[0].i;
  let stack = [];
  let restart = 0;
  let location;
  function bfs(tickets, v) {
    stack.push(tickets[v][0]);
    console.log(stack);
    location = tickets.splice(v, 1);
    restart = restartation();
    //다음 나라를 시작위치로 지정
    if (restart !== "no") {
      //시작위치로서 존재한다면

      bfs(tickets, restart);
    } else {
      //존재하지 않는다면
      stack.push(location[0][1]);
      return stack;
    }

    console.log(tickets);

    return stack;
  }
  function restartation() {
    let ret = "no";

    for (i = 0; i < tickets.length; i++) {
      7;
      console.log(location[0][1], tickets[i][0]);
      if (tickets[i][0] === location[0][1]) {
        ret = i;
        break;
      }
    }

    return ret;
  }
  return bfs(tickets, v);
}
