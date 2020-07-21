/*
1~3위 사탕
1~3위 중복 가능,

내림차순 정렬 후,
97 97 96 95 94 90 88

중복값이 있을 수 있고, 없을 수도 있음.
3칸의 배열을 만들어서
점수배열중 
0번 인덱스의 값을 가진 숫자 개수 탐색 해서 그 카운팅을
3칸배열의 0번 인덱스에 넣고,
점수 배열의 다음 인덱스에 있는 값이 0번 인덱스보다 작은 값이면
그대로 탐색
*/

let a = prompt().split(" ");
let arr = [0,0,0];
let res = a.sort(function(a,b){
    return b-a;
});
// console.log(res);
// res.splice(1, 1);
// res.splice(1, 1);
console.log(res);


let cnt = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < res.length; j++){
        if(res[i] == res[j]){
            arr[i] += 1;
            res.splice(j, 1);
            console.log(res);
            console.log(`arr[${i}]의 값 : ${arr[i]}`);
        }
    }
    cnt += arr[i];
}
//97 97 97 4 4 4 2 2 2 1 1
console.log(arr);
console.log(res);

console.log(cnt);

