function solution(n) {
  /*
    정수는 1로 나눈 나머지가 0이다
  */
  let checknum = Math.sqrt(n);

  if(checknum % 1 === 0) {
    checknum += 1;
    return checknum*checknum;
  }
  else return -1;
  //return answer;
}
solution(121);