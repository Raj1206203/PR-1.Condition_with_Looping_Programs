// 1 2 3 4 5 
// 2 3 4 5 
// 3 4 5   
// 4 5     
// 5 

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = i; j <= 5; j++) {
    str += `${j} `;
  }
  console.log(str);
}
