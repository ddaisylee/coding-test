// 나의 풀이
function solution(n) {
    let answer = String(n).split('').sort().reverse().join('');
    return Number(answer);
}

// 다른 풀이
function solution(n) {
    let answer = (n + '').split('').sort().reverse().join('');
    return +answer;
}
//형변환 메스드를 사용했냐 암묵적 형변환을 사용했냐의 차이