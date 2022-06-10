// 나의 풀이

function solution(arr, divisor){
    let filtered = arr.filter((val)=>val % divisor === 0);
    if(filtered.length === 0) return [-1]
    return filtered.sort((a,b)=>a-b);
}