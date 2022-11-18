
/*
    1. commands[i][0]-1부터 commands[i][1]까지 slice해서 복사값 배열 생성
    2. sort
    3. sort한 배열의 k번째 인덱스의 요소를 push
*/
function solution(array, commands) {
  var answer = [];
  let newarr = [];
  for(let i=0;i<commands.length; i++){
    newarr = array.slice(commands[i][0]-1, commands[i][1]);
    newarr.sort((a, b) => a - b);
    answer.push(newarr[commands[i][2]-1]);
    
  }
  return answer;
}
solution([1, 5, 2, 6, 3, 7, 4],
         [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	)