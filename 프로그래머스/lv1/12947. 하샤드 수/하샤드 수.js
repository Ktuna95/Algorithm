function solution(x) {
  var answer = true;
  let tmp = x.toString().split('');
  //let arr = [];
  let sum = 0;
  
  for(let i=0; i<tmp.length; i++){
    sum += Number(tmp[i]);
  }
  
  if(x % sum === 0) answer = true
  else answer = false;

  return answer;
}
solution(11);
/*
  1. 원본은 정수로 따로 빼두고 string으로 입력받고 length만큼 문자열로 쪼개기
  2. 형변환으로 정수로 바꾸어서 하나씩 더하기
  3. 원본 / 형변환한 정수를 통해 하샤드 수인지 판별
*/