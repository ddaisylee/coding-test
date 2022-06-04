// 다른 풀이 1
function solution(arr1, arr2) {
    const answer = [];
    arr1.forEach((row, rowIndex) => {
    answer.push(row.map((column, columnIndex) => column + arr2[rowIndex][columnIndex]))});
    return answer;
}

// 다른 풀이 2
function solution(arr1, arr2) {
    const answer = [];
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}