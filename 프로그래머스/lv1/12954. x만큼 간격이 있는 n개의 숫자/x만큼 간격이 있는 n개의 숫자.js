function solution(x, n) {
  var answer = [];
  let cnt = 1;
  for(let i=x; cnt<=n; cnt++){
      answer.push(x*cnt);
  }
  return answer;
}