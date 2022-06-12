// 나의 풀이
function solution(a,b){
    let days = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daySum;
    if(a < 2) {
        daySum = b - 1;
    } else {
        daySum = months.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
    }
    return days[daySum % 7];
}

// 다른 풀이
function solution(a,b){
    let count = 0;
    let day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(let i = 1; i < a; month[i]){
        count += b;
        return day[(count + 4) % 7]
    }
}