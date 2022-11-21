/*
    일차원배열을 false로 선언 및 초기화
    입력값이 들어 올때 마다
    일차원배열의 요소를 true로 변경
    이미 true라면 입력받은 요소를 다시 순회
    
    받은 포켓몬이 최대 횟수로 도달하면 반복문 탈출
*/
function solution(nums) {
    const tfArr = new Array(200000).fill(false); //포켓몬의 종류는 20만마리
    let answer = 0;                              //다른 종류의 포켓몬을 받은 횟수    
    let max = nums.length / 2;                   //최대 받을 수 있는 횟수

    for(const pokemon of nums){
        if(tfArr[pokemon] === false){
            tfArr[pokemon] = true;                           
            answer++;    
        }        
        if (answer === max) break;
    }    

    return answer;
}
solution([3,1,2,3]);