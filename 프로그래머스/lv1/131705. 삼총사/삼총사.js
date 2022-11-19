/*
 * 배열의 요소들 중 3가지 요소의 합이 0이나오는 요소들의 인덱스는 삼총사다.
 * 합이 0이 나오는 경우의 수를 리턴하시오.
 * [문제 해결법]
 * 1. 반복문 순회를 통한 count계산하기
      (1) map 
   V  (2) 삼중 for, while 

    i [-2, 3, 0, 2, -5]
    j [-2, 3, 0, 2, -5]
    k [-2, 3, 0, 2, -5]
    testcase
    i = 0 j = 1 k = 2
    -2  3  0

    i = 0 j = 1 k = 3
    -2  3  2

    i = 0 j = 1 k = 4
    -2  3 -5
    
    i = 0 j = 2 k = 1
    -2  0  3

    i = 0 j = 2 k = 3
    -2  0 2
    answer ++;

    i = 0 j = 2 k = 4
    -2  0 -5

    i = 0 j = 3 k = 1
    -2  2  3

    i = 0 j = 3 k = 2
    -2  2  0

    i = 0 j = 3 k = 4
    -2  2  -5

*/
function solution(number) {
    var answer = 0;
    let arr = [...number];
    
    //let arr2 = [...number];
    //let arr3 = [...number];
    
    for(let i = 0; i < number.length-2; i++){        
        for(let j = i+1; j < number.length-1; j++){        
            //if(i === j) j++;            
            for(let k = j+1; k < number.length; k++){        
                // if(i === k) k++;
                // if(j === k) k++;
                // if(i === k) k++;
                if(arr[i] + arr[j] + arr[k] === 0) answer++;
            }
        }
    }
    
    
    return answer;
}
solution([-2, 3, 0, 2, -5]);