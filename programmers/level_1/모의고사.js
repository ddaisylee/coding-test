// 나의 풀이
function solution(answers) {
    let answer = [];
    
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let oneCount = answers.filter((val, i)=> val === one[i % (one.length)]).length;
    let twoCount = answers.filter((val, i)=> val === two[i % (two.length)]).length;
    let threeCount = answers.filter((val, i)=> val === three[i % (three.length)]).length;

    let max = Math.max(oneCount, twoCount, threeCount);
    
    if(oneCount === max) answer.push(1);
    if(twoCount === max) answer.push(2);
    if(threeCount === max) answer.push(3);
    
    return answer;
}
// 예를 들어 1번 수포자가 모든 문제를 맞추기 위해서는 정답이 [1,2,3,4,5]가 반복
// 5로 나누면 0,1,2,3,4가 반복된다 one.length
// 8로 나누면 0~7 two.length
// 10으로 나누면 0~9 three.length

// 정답과 일치하는 요소만을 담은 배열의 길이로 맞은 개수를 나타낸다. -> filter