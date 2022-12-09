/**
 * 1. 반복문안에 배열을 하나 만들어서 ingredient[i]를 push하기
 * 2. 
 * 3. 배열 [배열.length - 4] = 1 &&
 *    배열 [배열.length - 3] = 2 &&
 *    배열 [배열.length - 2] = 3 &&
 *    배열 [배열.length - 1] = 1 인지 확인 [빵,야채,고기,빵]
 * 4. true면 answer++, false면 반복문 계속 진행
 */

 function solution(ingredient) {
    var answer = 0;
    const arr = [];

    for(let i=0; i < ingredient.length; i++){
        const lengths = arr.push(ingredient[i]);

        if(lengths >= 4){
            if(
                arr[lengths - 4] === 1 &&
                arr[lengths - 3] === 2 &&
                arr[lengths - 2] === 3 &&
                arr[lengths - 1] === 1
            ){
                for(let j=0; j<4; j++) arr.pop()
                answer++;
            }    
        }
    }
    console.log(answer);
    return answer;
}
solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);