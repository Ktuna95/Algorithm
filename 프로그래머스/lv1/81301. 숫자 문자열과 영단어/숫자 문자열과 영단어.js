/**
 * 1. 문자열 배열 생성
 * 2. split(arr요소)로 입력값의 해당 영단어를 지움
 * 3. join으로 인덱스에서 숫자를 얻어와서 이어붙임
 * 4. 반복
 * 5. 숫자형으로 출력
 */
function solution(s) {
  var answer = 0;

  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]
  
  let tmp = s;
  
  for(let i=0; i<arr.length; i++){
    let newarr = tmp.split(arr[i]);
    tmp = newarr.join(i)
  }

  return Number(tmp);
}
