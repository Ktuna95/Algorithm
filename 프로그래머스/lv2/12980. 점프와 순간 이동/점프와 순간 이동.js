/*
    슈트기능
    1. 한번에 K칸을 앞으로 점프하기 -> 건전지가 K만큼 소모
    2. (현재까지 온 거리) x2로 순간이동하기 -> 건전지 소모안함
    ? N만큼 움직이기 위한 최소한의 건전지 사용량은?

    풀이방식
    1. x2를 하면 무조건 짝수가 나옴
*/

function solution(n){
    var useBattery = 0; // 건전지 사용량

    while(n !== 0){
        if(n % 2 === 1){     // n이 홀수라면
            useBattery++;    // jump 1칸 하기
            n -= 1;          // 거리 1 좁히기
        }        
        else{                // n이 짝수라면 순간이동하기
            n /= 2;
        }
        
    }
    return useBattery;
}
solution(5000)