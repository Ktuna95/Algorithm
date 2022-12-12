function solution(n, k, enemy) {
  let left = 0;
  let right = enemy.length;

  const getSum = (index) => (index + 1 - k >= 0 ? enemy
    .slice(0, index + 1)                        // enemy배열까지 배열복사 [4,2,4,5]
    .sort((a, b) => a - b)                      // 오름차순 정렬  [2,4,4,5]
    .slice(0, index + 1 - k)                    // 0부터 인덱스 index+1-k까지 배열복사 [2]
    .reduce((acc, cur) => acc + cur, 0) : 0);   // 복사한 배열요소들 모두 더하기

  while (true) {
    if (right - left === 1) return right;       //최소값과 최대값 차이가 1이면 최대값 리턴

    const mid = Math.floor((left + right) / 2);
    console.log(mid);

    const sum = getSum(mid);
    console.log(sum);

    if (n >= sum) {
      left = mid;
    } else {
      right = mid;
    }
  }
}
solution(7,3,[4, 2, 4, 5, 3, 3, 1]);