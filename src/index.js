import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Funções array JS</h1>
`;

const lista = [1, 2, 3, 4, 5];

const find = lista.find(item => item == 5);

const map = lista.map(item => item * 2);

function reduceFunc(prev, current, index, arr) {
  console.log(prev, current, index, arr);
  return prev + current;
}
const initVal = 0;
const reduce = lista.reduce(reduceFunc, initVal);

document.getElementById("app").innerHTML += `
<h2> Tendo a lista [${lista}] </h2>
<code>const lista = [1,2,3,4,5];</code>
<p></p>

<code>let find = lista.find(item => item == 5);</code>
<br>
Result:  ${find} <br>
Desc: Returns the value of the first element in the array where predicate is true, and undefined otherwise.

<hr>
<code>let map = lista.map(item => item * 2);</code>
<br>
Result:  ${map} <br>
Desc: Calls a defined callback function on each element of an array, and returns an array that contains the results.

<hr>
<pre>
<code>
function reduceFunc(prev, current, index, arr) {
  console.log(prev, current, index, arr);
  return prev + current;
}
const initVal = 0;
let reduce = lista.reduce(reduceFunc, initVal);
</code>
</pre>
Result:  ${reduce} <br>
Desc: Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
`;
