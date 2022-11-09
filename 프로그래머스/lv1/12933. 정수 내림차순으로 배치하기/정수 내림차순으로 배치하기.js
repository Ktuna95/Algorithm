function solution(n) {
  let str = String(n);
  let newarr = Array.from(str); //문자열 -> 배열로 형변환
  
  newarr.sort((a,b)=>b-a);  //내림차순 정렬
  newstr = String(newarr);  //문자열로 형변환
  let tmp = newarr.join('');//조인으로 문자열의 콤마제거
  
  return Number(tmp);   //정수형으로 리턴
}
solution(118372)
/**
 * 해결방식
 * 1. 배열로 형변환 후 오름차순으로 sort
 */