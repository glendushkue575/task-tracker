/*
   FILE: sophisticated_code.js

   DESCRIPTION:
   This code is an implementation of a complex and elaborate sorting algorithm, known as Merge Sort.
   Merge Sort is a divide-and-conquer algorithm that works by dividing the input array into smaller subarrays, 
   sorting those subarrays recursively, and then merging them back together to obtain the final sorted array.

   AUTHOR: [Your Name]

   VERSION: 1.0
*/

// Function to recursively merge two subarrays
function merge(left, right) {
  let result = [];
  let lIndex = 0;
  let rIndex = 0;

  while (lIndex < left.length && rIndex < right.length) {
    if (left[lIndex] < right[rIndex]) {
      result.push(left[lIndex]);
      lIndex++;
    } else {
      result.push(right[rIndex]);
      rIndex++;
    }
  }

  return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}

// Recursive function to split the input array and merge sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// Test the mergeSort function
const arrayToSort = [8, 4, 2, 9, 1, 5, 7, 3, 6];
console.log(`Input Array: ${arrayToSort}`);
console.log(`Sorted Array: ${mergeSort(arrayToSort)}`);
console.log(`Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`);

// The following code snippet can be customized to test the mergeSort function with other arrays:
// const arrayToSort = [2, 6, 1, 9, 3, 5, 8, 7, 4];
// console.log(`Input Array: ${arrayToSort}`);
// console.log(`Sorted Array: ${mergeSort(arrayToSort)}`);
// console.log(`Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`);

// You can continue adding more test cases to evaluate the correctness and performance of the Merge Sort algorithm