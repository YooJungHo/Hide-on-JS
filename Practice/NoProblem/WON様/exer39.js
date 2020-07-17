let a = prompt('점수 입력');
a = a.split(' ');

let count = 0;
let aSet = new Set(a);
const aSetInArray = [...aSet].sort().reverse();
for(let i =0; i < a.length; i++){
    if(a[i]==aSetInArray[0]||a[i]==aSetInArray[1]||a[i]==aSetInArray[2]) count += 1;
};
console.log(count);