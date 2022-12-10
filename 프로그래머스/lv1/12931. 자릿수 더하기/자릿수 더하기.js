function solution(n)
{
    var answer = 0;

    let tostr = n.toString();
    
    for(let i=0; i< tostr.length; i++) answer += Number(tostr[i])
    return answer;
}