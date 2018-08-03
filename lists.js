
// chapter 4, exercise 3

// takes an array, returns a list
function arrayToList(array){
  var list = {};
  list.rest = null;
  for (var i = array.length - 1; i >= 0; i--){
    object = {
      value: array[i],
      rest: list.rest
    }

    if (i != 0){
      list.rest = object
    } else {
      list.value = array[i]
    }
  }
  return list;
}

array = [1, 2, 3]
list = arrayToList([1, 2, 3]);

console.log("Array to list: ", list, "\n----------");

// takes a list, returns an array
function listToArray(list){
  var array = [];
  var loop = list;
  while (loop != null){
    array.push(loop.value);
    loop = loop.rest;
  }
  return array;
}

list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
console.log("List to array:", listToArray(list), "\n----------");

// helper functions

// adds an element to the front of the list
function prepend(element, list){
  var newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
};

console.log(list);
prependedList = prepend(10, list)
console.log("Prepend 10 to the list:", prependedList, "\n----------");
console.log("Last value:", prependedList.rest.rest.rest.value, "\n----------") // should be 3

// returns the element in the nth position (zero-indexed)
function nth(list, number){
  var element = list;
  var counter = 0;
  while (counter < number) {
    if (element == null){
      return undefined;
    } else {
      element = element.rest;
      counter += 1;
    }
  }
  return element;
};
console.log("Nth - Nonrecursive solution:")
console.log("0th element in list:", nth(list, 0)); // should return list
console.log("1st element in list:", nth(list, 1)); // should return {value: 2, rest: ...}
console.log("2nd element in list:", nth(list, 2)); // should return {value: 3, rest: null}
console.log("5th element in list:", nth(list, 5),"\n----------"); // should return undefined

// implement a recursive nth function

function recursiveNth(list, number){
  if (number == 0){
    return list;
  } else if (list == null){
    return undefined;
  }
  return recursiveNth(list.rest, number - 1);
}

console.log("Recursive Solution:")
console.log("original list:", list);
console.log("0th element in list:", recursiveNth(list, 0)); // should return list
console.log("1st element in list:", recursiveNth(list, 1)); // should return {value: 2, rest: ...}
console.log("2nd element in list:", recursiveNth(list, 2)); // should return {value: 3, rest: null}
console.log("5th element in list:", recursiveNth(list, 5)); // should return undefined


