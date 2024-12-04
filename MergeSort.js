function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const half = arr.length / 2;
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftI = 0;
  let rightI = 0;
  let arr = [];

  for (let arrI = 0; arr.length < left.length + right.length; arrI++) {
    const leftElement = left[leftI];
    const rightElement = right[rightI];
    if (!rightElement || leftElement < rightElement) {
      arr[arrI] = leftElement;
      leftI++;
    } else {
      arr[arrI] = rightElement;
      rightI++;
    }
  }

  return arr;
}

console.log(merge([2, 4], [1, 3]));
console.log(merge([1, 3], [2, 4]));

console.log(mergeSort([])); // []
console.log(mergeSort([5, 2, 1, 3, 4])); // [1, 2, 3, 4, 5, 6 ]
console.log(mergeSort([7, 5, 2, 4, 1, 8, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55