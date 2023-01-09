function solution(progresses, speeds) {
    var answer = [];
    
    // 배포까지 남은 일 수 계산
    let done = progresses.map((val, idx) => Math.ceil((100 - val)/speeds[idx]));
    console.log(done)

    // 가장 처음 배포되는 요소
    let first = done[0];
    console.log(done[0])

    // 
    let cnt = 0;
  // leftDays 배열을 차례로 순회하며 현재 배포일보다 이후에 배포되어야할 기능을 만나면 이전까지의 기능을 한번에 배포
  done.forEach((daysLeft) => {
    if (first < daysLeft) {
      first = daysLeft;
      answer.push(cnt);
      cnt = 0;
    }
    cnt++;
  });
  answer.push(cnt);

  // 정답 반환
  return answer;
    

    return answer;
}
solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1])