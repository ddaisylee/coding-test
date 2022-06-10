//다른 풀이
function solution(strings, n) {
    return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
        return (a > b) - (a < b);
    } else {
        return (chr1 > chr2) - (chr1 < chr2);
    }
    });
}

// sort 메서드의 콜백함수 안에 비교에 필요한 코드를 작성한다.
// str.charAt(): 지정된 인덱스에 해당하는 문자를 반환