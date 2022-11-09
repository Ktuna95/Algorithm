function solution(n) {
  let i=2;
  while(i<n){
    
    if(n % i === 1) return i;
    else i++; 
  }
  return i;
}