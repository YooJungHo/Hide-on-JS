/*
    10개의 숫자를 입력해서 최댓값 반환
*/
let input = prompt('10개의 숫자를 입력하시오');

function solution(input){
    let a = input.split(' ');
    let max = 0;
    for(let i =0; i<a.length; i++){
        if(max < parseInt(a[i])) max = parseInt(a[i]);
    }
    return max;
}

console.log(solution(input));