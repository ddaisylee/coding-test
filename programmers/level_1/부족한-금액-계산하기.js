// 나의 풀이
function solution(price, money, count){
    let sum = price * (count * (1 + count)) / 2
    return sum > money ? sum - money : 0
}

// 다른 풀이
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
/**
 * tpm에서 money를 뺸 값으로 비교할 수도 있다.
 */