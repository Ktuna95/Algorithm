/*
    일차원배열 T/F 만들기 false로 기본값설정
    입력받은 요소의 값이 들어오면 일차원배열의 해당값의 요소를 true로 변경
    이미 true라면 입력받은 요소를 다시 순회
*/
function solution(nums) {
    const tfArr = new Array(200000).fill(false);
    let answer = 0; //다른 종류의 포켓몬을 받은 횟수
    let cnt = 0; //
    let max = nums.length / 2;

    for(const pokemon of nums){
        if(tfArr[pokemon] === false){
            tfArr[pokemon] = true;            
            cnt++;            
            answer++;    
            
            //continue;
        }        
        if (cnt === max) break;
    }    

    return answer;
}
solution([3,1,2,3]);