// 나의 풀이
function solution(s){
    return (s.length === 4 || s.length === 6) && s.search(/\D/g) < 0
}