function solution(number,limit, power) {
let answer = 0;
 
    for(let num = 1; num <= number; num++) {
        // number별 약수 개수 구하기
        let count = 0;
        for(let i = 1; (i*i) <= num; i++) {
            if(num % i == 0) {
                let share = Number((num / i));
                if((share*share) == num) {
                    count += 1;
                } else {
                    count += 2;
                }
            }
        }
 
        // 약수 개수가 limit 넘는지 비교
        if(count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }
    
    return answer;
}