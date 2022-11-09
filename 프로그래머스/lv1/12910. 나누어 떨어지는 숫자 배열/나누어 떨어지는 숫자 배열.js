function solution(arr, divisor) {
  var answer = [];
  let cnt = 0;
  for(let i=0; i<arr.length;i++){
      if(arr[i] % divisor === 0){
          answer.push(arr[i]);
          cnt++;
      }
      else if(i===arr.length-1 && cnt === 0){
          answer.push(-1);
          return answer;  
      } 
  }
  answer.sort((b,a)=>b-a);
  
  return answer;
}
solution([3,2,6], 10)