// 나의 풀이
function solution(lottos, win_nums) {
    let answer = [];
    
    let minNum = lottos.filter(n => win_nums.includes(n)).length;
    let maxNum = lottos.filter(n => n === 0).length + minNum;
    
    maxNum > 1 ? answer.push(7 - maxNum) : answer.push(6);
    minNum > 1 ? answer.push(7 - minNum) : answer.push(6);
    
    return answer;
}