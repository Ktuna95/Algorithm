function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT", "CF", "JM", "AN"];
    
    types.map((type)=>{
        type.split('').map(function (char){ 
            return MBTI[char] = 0;
        });
    });
    
    //console.log(MBTI);

    choices.map((choice, index)=>{
        const [disagree, agree] = survey[index];
        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    //console.log(choices);

    return types.map(([a, b])=>MBTI[b] > MBTI[a] ? b : a).join("");    
}
solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);