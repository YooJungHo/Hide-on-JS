/*
    사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램
*/

let a = prompt('값을 입력하시오');
function solution(number){
    let a = number.split('');
    let answer = 0;
    for(let i =0; i < a.length;i++) answer += parseInt(a[i]);
    return answer;
}
console.log(solution(a));