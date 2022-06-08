// 나의 풀이
function solution(n) {
    let x = Math.sqrt(n);
    return x % 1 === 0 ? Math.pow((x+1),2) : -1
}
// Math.sqrt() -> 제곱근을 구해준다. 이 값이 양의 정수인지를 판단해야 한다.
// 즉 제곱근이 소수점으로 나오면 안 된다. -> 1로 나누었을 때 0이면 양의 정수, 아니면 양의 정수가 아님

// 다른 풀이
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n)+1, 2) : -1
}
//Number.isInteger() -> 주어진 값이 정수인지를 판별하는 메서드