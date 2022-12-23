/*
노란색 격자 수의 갯수는 최소 1개이기 때문에 그것을 구성하기 위해 
갈색 격자가 감싸기 위한 최소 갯수 또한 가로 3개, 세로 3개로 최소 갯수가 정해지게 된다.

따라서, 갈색 격자와 노란색 격자를 더해서 카펫의 전체 면적을 특정 높이에서 나누고, 
그것을 (가로 - 2) * (세로 - 2) 로 해서 노란색 격자수와 일치하면 
그때의 width 값과 height 값이 카펫의 가로 길이와 세로 길이가 된다. 
노란색 격자를 구하기 위해서는 주변에 감싸고 있는 양 옆 모서리의 갈색 격자를 제외해야하므로 
가로와 세로 모두 -2씩 빼주어야 한다. 
*/
function solution(brown, yellow) {
    const answer = [];
    const CARPET_SIZE = brown + yellow;
    
    // 카펫의 최소 너비, 높이 : 3
    for(let i = 3; i < CARPET_SIZE; i++){
        let width = CARPET_SIZE / i;
        let height = i;
        
        // 카펫은 항상 가로 길이가 세로 길이보다 같거나 크다.(조건에 해당하지 않으면 패스)
        if(width < height) continue;
        
        // yellow의 전체 면적
        if((width - 2) * (height - 2) === yellow) {
            answer[0] = width;
            answer[1] = height;
        }
    }
    return answer;
}