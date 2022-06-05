// 나의 풀이
function solution(n){
    return (n + '').split('').reduce((acc, cur)=> +acc + (+cur),0)
}
//reduce()에 초기값을 설정하지 않으면 acc는 arr[0], cur는 arr[1]이 되는데,
//arr의 요소가 1개일 경우 arr[1]이 존재하지 않기 때문에 에러가 발생한다.
//따라서 acc의 초기값을 0으로 지정해주면 된다.