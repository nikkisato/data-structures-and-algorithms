const array = [1, 2, 3, 4, 5, 6, 7];

function reverse(array) {
  var output = [];
  while(array.length) {
    output.push(array.pop());
  }

  return output;
}

console.log(reverse(array));


//it outputs [7, 6, 5, 4, 3, 2, 1];
