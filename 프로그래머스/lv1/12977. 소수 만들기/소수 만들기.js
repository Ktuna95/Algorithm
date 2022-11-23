/*

    * 에라토스테네스의 체
    * 2 3 5 7의 배수들을 n까지 모두 제거하면 남는건 소수다

*/
function solution(nums) {
    var answer = 0;
    let tmp = [...nums];
    tmp.sort((a,b)=>b-a);
    let max = tmp[0]+tmp[1]+tmp[2];
    
    const arr = new Array(nums.length);
    
    //입력
    for(let i = 2; i<= max; i++){
        arr[i] = i;    
    }
    
    for(let i = 2; i<= max; i++){
        //이미 지워진 수는 continue;
        if(arr[i] === 0) continue;
        //i에 해당하는 배수들을 n까지 제거하기
        for(let j = i+i; j <= max; j+=i){
            arr[j] = 0;
        }
    }
    
    
    
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                let compare = nums[i]+nums[j]+nums[k];
                if(compare === arr[compare]) answer++;                
            }
        }
    }
    
    return answer;
}
solution([1,2,3,4]);