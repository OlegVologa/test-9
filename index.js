let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mySlice(arr, start = 0, end = arr.length) {
  let result = []; 
  for(let i = start; i < end; i++ ) {
    result.push(arr[i])
  }
  return result;
}


function myIndexOf(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

function myIncludes(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

// Проверка
console.log(mySlice(numbers, 5, 10));
console.log('');
console.log(myIndexOf(numbers, 4, 0));
console.log(myIndexOf(numbers, 4));
console.log(myIndexOf(numbers, 11));
console.log(myIndexOf(numbers, 3, 5));
console.log('');
console.log(myIncludes(numbers, 5, 0));
console.log(myIncludes(numbers, 5));
console.log(myIncludes(numbers, 55));
console.log(myIncludes(numbers, 5, 6));