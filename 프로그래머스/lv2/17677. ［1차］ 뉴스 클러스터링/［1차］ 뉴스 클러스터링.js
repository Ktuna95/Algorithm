/*  클러스터링: 유사성과 같은 개념을 바탕으로
             데이터를 몇개의 그룹으로 분류하는 기법

*   자카드 유사도 = 두 집합의 교집합의 개수 / 합집합의 개수    

    ! 주의사항
    ! 두 집합 모두 공집합이라면 1로 정의
    ! 대문자와 소문자의 차이는 무시    
    ! 유사도 값은 65536을 곱한 후 소수점 아래를 버리기

*   [접근방식]
    1. 입력된 문자를 두글자씩 끊어서 다중집합을 만든다.
        1) 입력값을 대문자로 고치기
        2) 두글자씩 다중집합으로 만들기
    2. 다중집합의 합집합과 교집합 구하기
        1) 교집합
        2) 합집합
    3. 자카드 유사도 구하기

    예시) str1 = aa1+aa2, str2 = AAAA12
    1. 입력된 문자를 두글자씩 끊어서 다중집합을 만든다.
        1) 입력값을 대문자로 고치기
            str1 = AA1+AA2, str2 = AAAA12
        2) 대문자로 이루어진 요소만 두글자씩 요소로 남기기
            str3 = ['AA','AA']
            str2 = ['AA','AA','AA']
            
    2. 다중집합의 합집합과 교집합 구하기
        1) 교집합
        ['AA', 'AA']
        2) 합집합
        ['AA', 'AA', 'AA']
    
    3. 자카드 유사도 구하기
    (자카드 유사도 = 두 집합의 교집합의 개수 / 합집합의 개수)
    (유사도 값은 65536을 곱한 후 소수점 아래를 버리기)
    answer = Math.floor(((2/3) * 65536));
    answer = 43690
    
*/
function solution(str1, str2) {
    var answer = 0;
    var arr1 = [];
    var arr2 = [];
    var regEx = /^[a-zA-Z]+$/;
    
    //  1. 입력된 문자를 두글자씩 끊어서 다중집합을 만든다.
    // 1) 입력값을 대문자로 고치기
    // 2) 두글자씩 다중집합으로 만들기
    for(var i=0; i<str1.length-1; i++){
        var subStr = str1.toUpperCase().substring(i, i+2);
        
        if(regEx.test(subStr)){
           arr1.push(subStr);           
           }
    }
    arr1
    
    for(var j=0; j<str2.length-1; j++){
        var subStr = str2.toUpperCase().substring(j, j+2);
        if(regEx.test(subStr)){
           arr2.push(subStr);
           }
    }
    arr2
  
    //2. 다중집합의 합집합과 교집합 구하기        
  var union = [] // 중복포함, 합집합 배열 (multi set)
  var intersect = [] // 중복포함, 교집합 배열

  //1) 교집합
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
    }
    //2) 합집합
    union.push(arr2[i])
  }
  // 합집합에 arr1 차집합 넣어주기
  for (var i = 0; i < arr1.length; i++) { 
    union.push(arr1[i])
  }

  // 3. 유사도 구하기, 예외처리
    if( union.length === 0 ){
        answer = 65536;
    }else{
        answer = Math.floor((intersect.length / union.length) * 65536);
    } 
    console.log(answer)
    return answer;
}

//solution('FRANCE','french1')
//solution('handshake','shake hands')
solution('aa1+aa2','AAAA12')