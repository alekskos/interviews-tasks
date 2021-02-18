const ARR = [
    {name: 'first', timeout: 3000},
    {name: 'second', timeout: 5000},
    {name: 'third', timeout: 2000},
];
// With loop
function sleep(arr) {
  let i = 0;
  let delay = arr[0].timeout;
  
  function loop() {
      console.log(arr[i].name);
      console.log(delay);
      if (i++ < arr.length - 1) {
          setTimeout(loop, delay += arr[i].timeout);
      }
  }
  setTimeout(loop, delay);
}
// Without loop
function sleep2(array) {
  let delay = 0;
  array.forEach(function (el, i) {
    setTimeout(function() {
        console.log( array[i].name);
      }, delay += array[i].timeout);
  })
}

// sleep(ARR);
sleep2(ARR);