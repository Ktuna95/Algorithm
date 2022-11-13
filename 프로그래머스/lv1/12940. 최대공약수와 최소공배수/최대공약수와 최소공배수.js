function solution(n, m) {
    var answer = [];  
    let nn= n;
    let mm= m;  
    let temp;

    if(n < m){
        let tmp = m;
        m = n;
        n = tmp;    
    }

    while(m !== 0){
        temp = n % m; //나머지 값 저장
        n = m;
        m = temp;
    }

    answer.push(n); // 최대 공약수
    theLeast(nn, mm)
    function theLeast(nn, mm){        
        let result = nn * mm / n;
        return answer.push(result) //최소 공배수
    }
    
    

    return answer;
}
solution(3, 12)