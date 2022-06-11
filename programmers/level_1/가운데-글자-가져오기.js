// 나의 풀이
function solution(s){
    let index = Math.floor(s.length /2);
    return s.length !== 0 ? s[index] : s.substring(index-1, index+1);
}

// 다른 풀이
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}