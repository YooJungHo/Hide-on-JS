/*
    1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고
    모든 자릿수의 총 합 구하기
*/
let a = '';
for(let i=1;i<21;i++) a += i;
a = a.split('');
let answer = 0;
for(let i=0;i<a.length;i++) answer += parseInt(a[i]);
console.log(answer);