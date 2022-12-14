/*
    split을 써서 공백기준으로 배열요소 입력받기
    Number로 정수로 형변환후 
    math.max, math.min으로 최대값 최소값 찾기
    
*/
function solution(s) {
    var answer = '';
    //let str = s.split(" ");
    //console.log(str[0], str[1])
    
    //str = s.split('').map(Number);
    str = s.split(' ');
    // console.log(str)
    // console.log(Math.min(...str), Math.max(...str))
    let min = Math.min(...str);
    let max = Math.max(...str);
    // console.log(min)
    //console.log(str[0])
    //answer.push(str.)
    // console.log(min,max)
    return min + ' ' + max;
}
solution("1 2 3 4");
solution("-1 -2 -3 -4");