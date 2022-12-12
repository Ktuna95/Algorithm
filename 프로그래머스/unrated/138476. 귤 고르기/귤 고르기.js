function solution(k, tangerine) {
    let curSize = 0;
    let answer = 0;
    
    // 최빈값 기준 내림차순 정렬 <- map을 사용하는 것보다 훨씬 빠름
    let count = getSortedArr(tangerine);
    
    while(k > 0) {
        while(count[curSize][1] !== 0) {
            count[curSize][1]--;
            k--;
        }

        curSize++;
        answer++;
    }
    
    return answer;
}

// 최빈값이 높은 순으로 정렬
function getSortedArr(array) {

    // 1. 출연 빈도 구하기
    const counts = array.reduce((pv, cv)=>{
        pv[cv] = (pv[cv] || 0) + 1;
        return pv;
    }, {});

    // 2. 요소와 개수를 표현하는 배열 생성 => [ [요소: 개수], [요소: 개수], ...] 
    const result = [];
    for (let key in counts) {
        result.push([parseInt(key), counts[key]]);
    }

    // 3. 출현 빈도별 정리하기
    result.sort((first, second) => {
        // 정렬 순서 바꾸려면 return first[1] - second[1];
        return second[1] - first[1];
    });

    return result;
}