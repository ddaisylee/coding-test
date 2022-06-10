// 나의 풀이

function solution(arr){
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i])
        }
    }
    return answer;
}
/**
 * 리턴할 새로운 빈 배열을 생성한다.
 * 기존 배열을 순회한다.
 * arr[i]가 arr[i+1]과 같지 않다면 새로운 배열에 push한다.
 * 새로운 배열을 반환한다.
 */