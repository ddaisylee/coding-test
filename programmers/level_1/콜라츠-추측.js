// 나의 풀이
function solution(num) {
    let count = 0;
    
    for(let i = 1; i <= 500; i++){
        if(num === 1) return count
        if(num % 2 === 0){
            num = num / 2
        } else {
            num = num * 3 + 1
        }
        count++
    }
    return -1
}

// 나의 풀이 개선안
function solution(num){
    let count = 0;
    
    for(let i = 1; i <= 500; i++){
        if(num === 1) return count;
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
        count++;
    }
    //삼항연산자를 사용하는 것이 더 깔끔해보인다.
        
    return num === 1 ? count : -1;
}

// 다른 풀이
function solution(num) {
    let answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
}
    return num == 1 ? answer : -1;
}
// while문을 사용한 풀이
// while문에 and 연산자를 사용하는 방법을 몰랐었는데
// 이렇게 하면 num이 1이 되는 순간에 빠져나올 수 있어서 좋은 방법인 것 같다.