function solution(num_list) {
    var answer = [];
    var cnt=0;
    var i=num_list.length-1;

    while(i>=0){
        answer[cnt] = num_list[i];
        cnt++;
        i--;
    }
    return answer;
}