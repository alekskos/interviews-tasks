/**
Напишите функцию, которая найдет все наборы анаграмм в строке. 
Анаграммы - слова, составленные из одного и того же набора букв (рост-сорт-трос)
*/

const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';

function getAnagrams(str) {
  let b = [];
  let result = new Map();
  let arr = str.split(' ');
  
  for (let i = 0; i < arr.length; i++) {
    let sort = arr[i].split('').sort().join('');
    
    if (result.has(sort)) {
      result.forEach((value,key)=>{
        if (key === sort) {
          value.push(arr[i])
        }
      });
    } else {
      result.set(sort, [arr[i]]);
    }
  }
  return [...result.values()];
}
