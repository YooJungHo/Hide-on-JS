/*
        1970년 1월 1일 이후로 지금까지 흐른 시간을
        천분의 1초 단위로 반환
*/
const d =new Date();
let year = d.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970

console.log(year);