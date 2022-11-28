


function drink(coke){
    
}
function solution(a, b, n) {
    var answer = 0;
    let coke = n;
    let change = 0;
    //a = 콜라를 받기위해 마트에 주어야하는 병 수
    //b = 빈 병 a개를 갖다주면 마트가주는 콜라 병 수
    //n = 상빈이가 가진 빈 병의 개수
    
    while(coke>=a){
        let tmp = Math.floor(coke/a);
        coke = coke-(tmp*a) + (tmp*b);
        answer += tmp * b;
    }
    
    
    return answer;
}