function isPalindrome(str, left = 0, right = null) {
  if (right === null) {
    right = str.length - 1; // 오른쪽 인덱스 초기화
  }
  if (left >= right) {
    return true; // 모든 문자 비교 완료
  }
  if (str[left] !== str[right]) {
    return false; // 회문이 아님
  }
  return isPalindrome(str, left + 1, right - 1); // 재귀 호출
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("역삼역")); // true
//재귀함수는 자신을 스택에 쌓고 줄여가면서 연산을 하기 때문에 속도가 느리다. 하지만 코드가 훨씬 간결해진다.
// 재귀함수는 스택을 사용하기 때문에 메모리 사용량이 많아질 수 있다. 그래서 주의해야 한다. 스택 오버플로우가 발생할 수 있다. 스택 오버플로우는 재귀함수가 너무 깊게 호출될 때 발생한다. 스택의 크기를 초과하면 에러가 발생한다. 그래서 재귀함수를 사용할 때는 종료 조건을 잘 설정해야 한다.
