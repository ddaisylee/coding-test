// 나의 풀이
function solution(phone_number) {
    let length = phone_number.length
    return '*'.repeat(length - 4) + phone_number.slice(length - 4, length)
}