function solution(s) {
    s = s.toLowerCase();
    //공백은 한 개 이상 -> 2개 3개일 수도 있음
    let arr = str.split(' ').filter((item)=> item !== ' ')
    
    return arr.map((item)=>item.split('').map((i, index)=> index % 2 === 0 ? i.toUpperCase() : i.toLowerCase()).join('')).join(' ')
}
