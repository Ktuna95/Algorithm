/*
    1.  n < 수
    2.  두 수 모두 이진수 변환시 1의개수 동일 1 2 4 6 8 10
    ㄴ 이진법변환후 split'1'.length
    3. 어떤수를 1부터 계속 출발하며 n과 비교하기
*/
function solution(n) {
    var answer = 0;
    let num = n.toString(2).split('1').length;
    
    while(true){
        n++;
        if(n.toString(2).split('1').length === num) return n;
    }
}