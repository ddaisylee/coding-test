// 나의 풀이
function solution(numbers) {
    let arr = []

    for (let i = 0; i < numbers.length; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
        arr.push(numbers[i] + numbers[k]);
        }
    }
    const answer = [...new Set(arr)];
    return answer.sort((a, b) => a - b);
}