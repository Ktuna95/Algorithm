function solution(n) {
    let answer = 0;
    let tmp;
    tmp = n.toString(3); //10진법 -> 3진법으로 변환
    tmp = tmp.split('').reverse().join('');

    answer = parseInt(tmp, 3);

    return answer;
}
solution(45);