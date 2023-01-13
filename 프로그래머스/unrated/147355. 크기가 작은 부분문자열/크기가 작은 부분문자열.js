function solution(t, p) {
  let arr = [];
    
  for(let i=0; i<t.length; i++){
    // arr 배열에다가 
    arr.push(t.slice(i, i+p.length))
  }
    
  arr = arr.filter((a,b) => a.length === p.length).filter((a) => a <= p)
  return arr.length
}