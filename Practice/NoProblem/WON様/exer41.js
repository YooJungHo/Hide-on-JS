/*
    소수를 찾는 함수 만들기
*/

let a = prompt('입력하시오');
function solution(n){
    for(let i =2; i<n;i++){
        if(n%i==0) return 'NO'
    }
    return 'YES'
};
console.log(solution(a));