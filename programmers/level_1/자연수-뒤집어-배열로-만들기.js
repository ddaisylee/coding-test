// 나의 풀이
function solution(n) {
    let answer = (n + '').split('').reverse()
    return answer.map((num)=>+num)
}

// 다른 풀이
function solution(n) {
    return n.toString().split('').reverse().map(o => parseInt(o));
}
// 다른 toString()과 parseInt() 메서드를 사용