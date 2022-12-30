
function  gcd(m, n) {
    let a = Math.max(m, n);
    let b = Math.min(m, n);
    let r = a % b;

    while (r !== 0) {        
        a = b;
        b = r;
        r = a % b;
    }
    return b;      
}
//^ 최소공배수 구하는 함수
function lcm(m, n) {
    return m * n / gcd(m, n);
}


function solution(arr) {
    //^ 최대공약수 구하는 함수
    

    let answer = lcm(arr[0], arr[1]);
    let i = 2;
    while(i<arr.length){
        answer = lcm(answer, arr[i]);
        i++
    }
    // for(let i=2; i<arr.length; i++){
    //     answer = lcm(answer, arr[i]);                
    // }

    return answer;
}