/*
    1. 이중반복문으로 더해서 push
    2. 중복되는 값은 삭제
        1) map
        2) filter
        3) set
    3. sort 후 리턴    
*/
function solution(numbers) {
    var answer = [];
    
    for(let i=0; i< numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }

    //중복제거
    answer = answer.filter((element, index) => {
        return answer.indexOf(element) === index;
    });
    answer.sort((a, b) => a - b);
    return answer;
}
solution([2,1,3,4,1]);