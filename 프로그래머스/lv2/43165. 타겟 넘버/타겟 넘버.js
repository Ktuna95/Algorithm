/**
 * DFS(깊이우선탐색)
 * 재귀함수 
 ** 조건에 만족하는 모든 경우의 수 구하기
 * 1. numbers 배열에 주어진 양수들을 각각 더하거나 빼기
 * 2. 목표하고자 하는 숫자를 만들 수 있는 모든 경우의 수 구하기
 * 
 * 다음 재귀를 호출 할 때 인덱스 1 늘려주기
 * 여태까지의 총합을 현재 값을 더하거나 빼서 넘겨주기
 * 
 * 덧셈만 끝까지 해보고 뺄셈을 하나씩 해보며 모든 경우의 수를 확인하는 방법
 */
function solution(numbers, target) {
    const dfs = (index, sum) => {
      if (index === numbers.length) return sum === target ? 1 : 0;
      return dfs(index + 1, sum + numbers[index]) + dfs(index + 1, sum - numbers[index]);
    };
    return dfs(0, 0);
  }
  solution([1, 1, 1, 1, 1],3)
  //solution([4, 1, 2, 1], 4)