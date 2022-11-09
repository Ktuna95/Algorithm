function solution(phone_number) {  
  let arr = [...phone_number];
  let lastword=[];
  let indexnum = arr.length -4;

  for(let i=indexnum; i<arr.length; i++){
    lastword.push(arr[i]);
  }
  
  for(let i=0; i<indexnum; i++){
    lastword.unshift('*');
  }
  
  return lastword.join('');
  
}
solution('0212345678')