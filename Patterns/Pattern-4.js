// 1 
// 2 1 
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

for(let i = 1; i <= 5; i++){
    let str ="";
    for(let j = i; j >= 1; j --){
        str += `${j} `;
    }
    console.log(str);
}
