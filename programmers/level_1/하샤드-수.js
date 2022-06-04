// 나의 풀이
function solution(x) {
    let sum = 0
    for(let i = 0; i < String(x).length; i++){
        sum += Number(String(x)[i])
    }
    // 비교 연산자를 사용하고 있으므로 무조건 true 또는 false를 return한다.
    // 따라서 ? true : false를 생략하고 평가식만 작성해도 된다는 피드백이 있었다.

    // return String(x) % sum === 0 ? true : false 대신에
    return String(x) % sum === 0 // 이렇게 간결하게 return 할 수 있다.

}

// 다른 풀이
function solution(x){
    return !(x % (n + '').split('').reduce((acc, cur)=>+acc + +cur))
}
// n + '' -> 숫자를 문자열로 형변환
// +word -> 문자를 숫자로 형변환