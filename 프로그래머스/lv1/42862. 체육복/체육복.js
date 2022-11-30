/* 
^ 탐욕법(그리디) 알고리즘
^ 1. 탐욕적 선택 속성: 앞의 선택이 이후의 선택에 영향을 주지 않는다.
^ 2. 최적 부분 구조: 문제에 대한 최종해결방법은 부분 문제에 대한 최적 문제 해결 방법으로 구성된다.

  전체 학생의 수 n, 
  체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
  여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
  체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

  1. reserve배열요소의 값이 lost배열요소값 -1, +1범위에 있는지
   1-1. 있다면 reserve배열요소와 lost 배열요소 삭제 (체육복 빌려줌)
  2. 없다면 lost배열요소 삭제 후 answer++
  3. 반복문이 끝나면 전체학생수(n) - 체육복 없는학생수(answer)
 */
var answer = 0;    

function calculate(n, lost, filted_reserve){
    while(filted_reserve.length !== 0){
        if(filted_reserve[0] === lost[0]-1 || filted_reserve[0] === lost[0]+1) {            
            filted_reserve.shift();
            lost.shift();
        }
        else{
            if(filted_reserve[0]>lost[0]) lost.shift();            
            else {
                filted_reserve.shift();
                answer++;
            }
            
        }
    }
    // while(filted_reserve.length < lost.length){
    //     lost.shift();
    //     answer++;
    // }
    return n - answer ;
}  

function solution(n, lost, reserve) {

    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);

    //예외처리) 여분을 가진 학생 중 도둑맞은 학생 제외한 값 filted
    let filted_reserve = lost.filter(same => !reserve.includes(same));
    let filted_lost = reserve.filter(same => !lost.includes(same));

    if(filted_reserve.length === 0) return calculate(n, lost, reserve)
    else return calculate(n, filted_lost, filted_reserve)

}
solution(5,[2,4], [1,3,5]) //5
//solution(5,[1,2], [2,3]) //4
//solution(5,[5,4,2],[2,4]); //4