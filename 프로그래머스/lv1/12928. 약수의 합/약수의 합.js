function solution(n) {
  var answer = 0;
  let filter_num = getDivisors(n); 

  return filter_num.reduce((acc, cur, i) => acc + cur, 0);

}

const getDivisors = (num) => {
  const divisors = [];
  
  for(let i = 1 ; i <= Math.sqrt(num) ; i++){
      if(num % i === 0) {
          divisors.push(i);
          if(num / i != i) divisors.push(num / i);
      }
  }
  
  // divisors.sort((a, b) => a - b);
  return divisors;
}
solution(12)