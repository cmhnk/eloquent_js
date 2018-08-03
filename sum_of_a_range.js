// chapter 4, exercise 1

function range(start, end){
  var arr = []
  for (var i = start; i <= end; i++){
    arr.push(i);
  }
  return arr;
}

function sum(array){
  var sum = 0;
  array.forEach(function(number){
    sum += number
  })
  return sum;
}

my_range = range(1, 10);
console.log(sum(my_range));

