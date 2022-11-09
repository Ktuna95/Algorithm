function solution(arr) {
  //정렬은 페이크 있는 그대로 출력해야함
//var answer = [];

if( arr.length <=1) {
    return [-1]; 
} 
else{
  let idxof = arr.indexOf(Math.min(...arr));
  arr.splice(idxof,1);
    //answer=arr.sort((a,b)=>b-a);    
    //answer.pop();           
    return arr;
}    

}
solution([4,5,3,0,2,1])