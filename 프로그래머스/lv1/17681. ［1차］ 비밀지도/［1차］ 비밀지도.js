function chunkSubstr(str, n) {
    const arr = [];
  
    for (let i = 0; i < str.length; i+=n) {
      arr.push(str.substring(i, i+n));
    }
    return arr;
  }
function solution(n, arr1, arr2) {
    var answer = [];
    let newarr1 = new Array(n);
    let newarr2 = new Array(n);
    let tmp1 = [];
    let tmp2 = [];
    //0으로 초기화
    //newarr1.fill(0);
    //newarr2.fill(0);    
    for(let i=0; i<n; i++){
        tmp1.push(arr1[i].toString(2));  
        tmp2.push(arr2[i].toString(2));  
    }
    
    newarr1 = [...tmp1];
    newarr2 = [...tmp2];
    let map1 = [];
    let map2 = [];
    
    for(let i=0; i<newarr1.length; i++){
        let arrarr1 = newarr1[i];
        while(arrarr1.length <n){
            arrarr1='0'+arrarr1;
        }       
        for(let j=0; j<arrarr1.length; j++){
            if(arrarr1[j]==='0') map1.push(' ');
            else if(arrarr1[j]==='1') map1.push('#');
            else;
        }      

    }

    for(let i=0; i<newarr2.length; i++){
        let arrarr2 = newarr2[i];                    
        while(arrarr2.length <n){
            arrarr2='0'+arrarr2;
        }            
        
        for(let j=0; j<arrarr2.length; j++){
            if(arrarr2[j]==='0') map2.push(' ');
            else if(arrarr2[j]==='1') map2.push('#');
            else;
        }      
    }
    for(let i=0; i<map1.length; i++){
        if(map1[i]==='#' || map2[i]==='#') answer.push('#');
        else answer.push(' ');
    }
    ;
    
    

    return chunkSubstr(answer.join(''), n);;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
