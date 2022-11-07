function solution(n) {
  //var answer = 0;
  let checknum = Math.sqrt(n);

  if(checknum % 1 === 0) {
    checknum += 1;
    return checknum*checknum;
  }
  else return -1;
  //return answer;
}
solution(121);