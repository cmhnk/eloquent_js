// chapter 4, exercise 2

// pure function; does not mutate original array
function reverseArray(array){
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i -= 1){
    reversed.push(array[i]);
  }
  return reversed;
}

var my_array = [2, 3, 5, 7, 11];
console.log("Original Array:", my_array);
console.log("Reversed:", reverseArray(my_array));


// mutates original array
function reverseInPlace(array){
  for (var i = 0; i < (array.length - 1); i++) {
    element = array.pop();
    array.splice(i, 0, element);
  }
  return array;
}

var another_array = [1, 2, 3, 4, 5];
console.log("Original Array:", another_array);
// reverse
reverseInPlace(another_array);
console.log("Mutated Array:", another_array);

