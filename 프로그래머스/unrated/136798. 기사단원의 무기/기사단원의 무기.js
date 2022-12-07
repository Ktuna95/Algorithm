function solution(number,limit, power) {
let answer = 0;
 
    for(let num = 1; num <= number; num++) {
        // number별 약수 개수 구하기
        let count = 0;
        for(let i = 1; (i*i) <= num; i++) {
            // 약수 구하는 방법 
            // 1) 나머지 연산(%) 시 결과 값이 0일 때 (몫이 정수로 나누어 떨어지는 수)
            if(num % i === 0) {
                let share = Number((num / i));
                if((share*share) === num) {
                    count += 1;
                } else {
                    count += 2;
                }
            }
        }
 
        // 약수 개수가 limit 넘는지 비교 크면 power를 더해주기
        if(count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }
    
    return answer;
}