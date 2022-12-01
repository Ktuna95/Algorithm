/*
    1. 객체로 받기
    2. 객체 obj key에 배열값을 넣고 value에 해당 수의 개수 넣기    
    3. 객체값을 순회하며
    4. 내림차순으로 sort하기    
*/
function solution(X, Y) {
    const answer = [];
    const obj = {};
  
    for (const el of X) {
      obj[el] = (obj[el] || 0) + 1;
    }
  
    for (const el of Y) {
      if (obj[el]) {
        answer.push(el);
        obj[el]--;
      }
    }
  
    answer.sort((a, b) => b - a);
  
    if (!answer.length) return "-1";
    else if (answer[0] === "0") return "0";
    return answer.join("");
  }
//solution("12321","42531");
solution("5525","1255");