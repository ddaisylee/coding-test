// 나의 풀이
function solution(s){
    let answer = s;
    let words = ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    for(let i = 0; i < words.length; i++){
        answer = answer.split(words[i]).join(i)
    }
    return Number(answer);
}

