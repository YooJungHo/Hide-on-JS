/*
    대문자는 소문자로 소문자는 대문자로!!
*/

let a = prompt('입력하시오');

function solution(input){
    let answer = '';
    for(let i=0;i<input.length;i++){
        if(input[i] == input[i].toUpperCase()){
            answer += input[i].toLowerCase();
        } else{
            answer += input[i].toUpperCase();
        }
    }
    return answer;
}

console.log(solution(a));