/*
    2020년 1월 1일이 수요일일때 월,일을 입력받아 무슨 요일인지 맞추기
*/
Int(prompt('월을 입력하시오'));
let b = parseInt(prompt('일을 입력하시오'));
function solution(a,b){
    let days = [0,31,29,31,30,31,30,31,31,30,31,30];
    let day = ['TUE','WED','THU','FRI','SAT','SUN','MON'];
    let answer = b;
    for(let i=0;i<a;i++){
        answer += days[i];
    }
    return day[answer%7];
};
console.log(solution(a,b));