const fs = require('fs');
let input = fs.readFileSync('shipCargo.txt','utf-8');
const moveList = input.split('\n').map(String);
const cargoInner = [
    ['M', 'F', 'C','W', 'T', 'D', 'L', 'B'].reverse(),
    ['L', 'B', 'N'].reverse(),
    ['V', 'L', 'T', 'H', 'C', 'J'].reverse(),
    ['W', 'J', 'P', 'S'].reverse(),
    ['R', 'L', 'T', 'F', 'C', 'S', 'Z'].reverse(),
    ['Z', 'N', 'H', 'B', 'G', 'D', 'M'].reverse(),
    ['N', 'C', 'G', 'V', 'P', 'S', 'M', 'F'].reverse(),
    ['Z', 'C', 'V', 'F', 'J', 'R', 'Q', 'W'].reverse(),
    ['H', 'L', 'M', 'P', 'R'].reverse(),
]
 const arrMove = moveList.map((item) =>{
    return item.match(/\d+/g)
})

let corrArrMove = arrMove.map((innerArray) => {
  return innerArray.map((element, index) => {
    if (index === 1) {
      return String(parseInt(element, 10) - 1); 
    }
    if (index === 2) {
      return String(parseInt(element, 10) - 1); 
    }
    if (index === 0) {
      return String(parseInt(element, 10) * -1); 
    }
    return element; 
  });
})
 function moveContainers (){
  for(let i = 0;i<arrMove.length;i++){
    let f = cargoInner[corrArrMove[i][1]].splice(corrArrMove[i][0])
    f.reverse()// якщо треба Part 2 то ця  стрічка коду непотрібна)
    cargoInner[corrArrMove[i][2]].push(...f) 
  }
  return cargoInner;
 } 

moveContainers()
 const finish = cargoInner.map((item) =>{
  return item.pop()
 }) 
console.log(finish)//Part 1
