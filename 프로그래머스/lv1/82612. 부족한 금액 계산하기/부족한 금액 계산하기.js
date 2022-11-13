function solution(price, money, count) {
    let incentive = price;    
    let result = 0;
    for(let i=1; i<=count; i++){
        incentive = price * i; // 이용횟수에 따른 추가요금 산정
        result += incentive; // 
        // if(money < incentive){
        //     return Math.abs(result - money);
        // };        
    }   
    if(money >= result) return 0;
    else return Math.abs(result-money);
}
solution(3, 20, 4);