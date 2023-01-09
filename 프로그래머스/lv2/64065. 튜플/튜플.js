function solution(s) {
    let answer = [];
    s = s.slice(2, s.length-2).split('},{');
    console.log(s)
    // 문자열 s의 맨앞 문자 {{ 와 맨뒤의 }} 를 제외하고 },{ 기준으로 나누어 배열에 담음 
    // 그럼 s는 ['2', '2,3,4'] 이런식의 튜플(문자열) 배열로 바뀜
    
    const tmp = s.sort((a, b)=> a.length - b.length).map(elem => elem = elem.split(','));
    console.log(tmp);
    // 배열의 길이에 맞추어 정렬한 후 각 요소를 , 문자 기준으로 한번더 split 함 
    // tmp는 [['2'], ['2','3','4']] 이런 배열로 바뀜
    
    for(let i=0; i<tmp.length; i++)
        for(let j=0; j<tmp[i].length; j++)
            answer.push(parseInt(tmp[i][j], 10));
            // 빈배열 answer에 각 요소들을 int 형식으로 바꾼 후 삽입
            // answer는 [2, 2, 3, 4] 이런 숫자 배열로 바뀜

    console.log(Array.from(new Set(answer)));
    return Array.from(new Set(answer));
    // Set을 사용하여 중복된 값을 없애주고 배열로 전환
}
solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");