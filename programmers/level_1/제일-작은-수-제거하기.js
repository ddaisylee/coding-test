// 나의 풀이
function solution(arr) {
    // 예외 처리
    if(arr.length === 1) return [-1];
    // spread operator로 제일 작은 수를 찾는다.
    let min = Math.min(...arr);
    // 제일 작은 수를 제외한 숫자만을 배열에 담아 리턴한다.
    return arr.filter((num)=> num !== min);
}

// 다른 풀이
function solution(arr){
    // 예외 처리
    if(arr.length <= 1) return [-1];
    // Array.prototype.splice 메서드 사용
    arr.splice(Math.min(...arr),1);
    return arr;
}
// splice(시작 인덱스, 몇 개를 잘라서, 무엇을 추가할건지)
//arr.splice(arr.indexOf(Math.min(...arr)), 1)
// 자르는 카운트가