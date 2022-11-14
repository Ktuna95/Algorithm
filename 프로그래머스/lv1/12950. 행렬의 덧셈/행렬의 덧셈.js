function solution(arr1, arr2) {
    var answer = [];
    for(let i=0; i<arr1.length; i++){
        let sum = [];
        for(let j=0; j<arr1[i].length; j++){
            sum.push(arr1[i][j]+arr2[i][j])            
        }
        answer.push(sum);
    }
    //answer = [[arr1[0][0]+arr2[0][0]], [arr1[0][1]+arr2[0][1]],
    //        [arr1[1][0]+arr2[1][0]], [arr1[1][1]+arr2[1][1]]];
    return answer;
}
//solution([[1,2],[2,3]], [[3,4],[5,6]])