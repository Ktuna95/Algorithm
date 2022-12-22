function solution(n) {
    let answer = 1; // 초기값을 1로설정

    // 두 수를 더했을 때 n을 넘기면 안돼서 n / 2까지 반복
    for (let k = 1; k <= n / 2; k++) {
        let sum = 0;
        let i = k; // i = 더해질 값, k = 초기값

        // sum이 n보다 작을때까지 반복하여 i 더하기 
        while (sum < n) {
            sum += i++;
            if(sum>n) break;    // sum이 n보다 크면 반복문 탈출(효율성 검사)
        }

        // sum과 n이 같으면 answer에 1 더하기
        if (sum == n) answer++;
    }
    return answer;
}