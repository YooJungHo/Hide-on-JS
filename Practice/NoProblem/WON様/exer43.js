/*
    10진수의 숫자를 입력받아 2진수로 변환하기
*/
let a = parseFloat(prompt('입력하시오'));
function solution(input){
    return input.toString(2);
};

console.log(solution(a));
console.log(typeof(solution(a)));