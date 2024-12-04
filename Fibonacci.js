function fibs(n) {
    let arr = [];
  
    for (let i = 0; i < n + 1; i++) {
      if (i == 0 || i == 1) arr.push(i);
      else {
        arr.push(arr[i - 1] + arr[i - 2]);
      }
    }
  
    return arr;
  }
  
  console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
  
  function fibsRec(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 1] + fibsRec(n - 1)[n - 2]];
  }
  
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]