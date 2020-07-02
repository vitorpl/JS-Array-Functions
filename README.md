#Funções array JS

###Tendo a lista [1,2,3,4,5]

```const lista = [1,2,3,4,5];```

let find = lista.find(item => item == 5);
Result: 5
Desc: Returns the value of the first element in the array where predicate is true, and undefined otherwise.
let map = lista.map(item => item * 2);
Result: 2,4,6,8,10
Desc: Calls a defined callback function on each element of an array, and returns an array that contains the results.

function reduceFunc(prev, current, index, arr) {
  console.log(prev, current, index, arr);
  return prev + current;
}
const initVal = 0;
let reduce = lista.reduce(reduceFunc, initVal);

Result: 15
Desc: Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
