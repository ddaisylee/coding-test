// 나의 풀이
function solution(a, b) {
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    let sum = 0;
    
    if(min === max) return min;
    
    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
}

// 다른 풀이 (1)
function solution(a,b){
    let sum = 0;
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
        sum += i
    }
    return sum;
}
// for문의 조건부에서 Math. 메서드를 사용했다.

// 다른 풀이 (2)
function solution(a,b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}

// 등차수열의 합(가우스 공식)
