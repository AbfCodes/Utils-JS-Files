arr1 = [
  [2, 4, 6],
  [5, 6, 7],
  [7, 6, 7]
];
arr2 = [
  [3, 7, 1],
  [6, 8, 8],
  [9, 2, 9]
];

const colLength = arr => arr[0].length;
//2d array with values inseted
//first Array is row and other Array is col
const res = new Array(arr1.length)
  .fill(0)
  .map(() => new Array(colLength(arr2)).fill(0));

let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < colLength(arr2); j++) {
    for (let k = 0; k < colLength(arr1); k++) {
      sum += arr1[i][k] * arr2[k][j];
    }
    res[i][j] = sum;
    sum = 0;
  }
}
console.log(res);
