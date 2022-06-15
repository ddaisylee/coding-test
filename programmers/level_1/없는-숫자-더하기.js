// 나의 풀이
function solution(numbers){
    let sum = 0;
    for(i of numbers){
        sum += i;
    }
    return 45 - sum;
}