/*
    
    
    다트 기회 3번
    S,D,T라는 영역이 존재, s = 1제곱 d = 2제곱 t = 3제곱
    *, #라는 옵션이 존재 * = 전에 얻은 점수를 2배로 만듦, # = 마이너스2배
    총 연산값을 리턴하기
*/
function solution(dartResult) {
    var numArr = [];
    var number = 0;
    var answer = 0;
    for (var i=0; i<dartResult.length; i++) {
        
        // 점수
        if (/[0-9]/.test(dartResult[i])) {
            if (dartResult[i] == 1 && dartResult[i+1] == 0) {
                number = 10;
                i++;
            } else {
                number = dartResult[i];
            }
        }
        
        // 보너스
        if (dartResult[i] == 'S') numArr.push(number ** 1);
        if (dartResult[i] == 'D') numArr.push(number ** 2);
        if (dartResult[i] == 'T') numArr.push(number ** 3);
        
        // 옵션
        if (dartResult[i] == '#') numArr[numArr.length-1] *= -1;
        if (dartResult[i] == '*') {
            numArr[numArr.length-1] *= 2;
            numArr[numArr.length-2] *= 2;
        }
        
    }
    
    // 계산
    numArr.map((item) => {
        answer += Number(item);
    })
    return answer;
}