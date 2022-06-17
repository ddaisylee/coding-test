// 나의 풀이
function solution(id_list, report, k) {
    //answer: 숫자로 이루어진 배열
    const answer = new Array(id_list.length).fill(0);
    
    
    const report_list = {}
    
    id_list.map((user)=>{
        report_list[user] = []
    });
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }
    })
    
    for(const key in report_list){
        if(report_list[key].length >= k){
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
};

let report_list = {
    muzi: ['appeach'],
    frodo: ['frodo', 'appeach'],
    appeach: [],
    neo: ['frodo', 'muzi']
}