function solution(s) {
    var answer = '';
    answer=
        s.toLowerCase().split(' ')
        .map(i => i.charAt(0).toUpperCase() + i.slice(1))
        .join(' ');

    // 1. 전부 소문자로 바꾸기
    console.log(s.toLowerCase())
    // 2. split으로 배열찢기
    console.log(s.toLowerCase().split(' '))
    // 3. charAt(0)으로 요소의 첫번째값을 대문자로 바꾸기
    console.log(s.toLowerCase().split(' ').map(i => i.charAt(0).toUpperCase())); 
    // 4. slice로 배열요소 복사
    console.log(s.toLowerCase().split(' ').map(i => i.charAt(0).toUpperCase() + i.slice(1)));
    // 5. join으로 배열요소를 하나로 연결
    console.log(s.toLowerCase().split(' ').map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(' '));
    console.log(answer)
    return answer;
}
solution("3people unFollowed me");