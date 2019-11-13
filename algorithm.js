// Merge sort practice
function merge(array1, array2) {
    let result = [];
    let arr1 = array1;
    let arr2 = array2;
    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0] < arr2[0]) {
            result.push(arr1[0]);
            arr1 = arr1.slice(1);
        }
        else {
            result.push(arr2[0]);
            arr2 = arr2.slice(1);
        }
    }
    if (arr1.length === 0 && arr2.length !== 0) {
        result.push(...arr2);
    }
    if (arr2.length === 0 && arr1.length !== 0) {
        result.push(...arr1);
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid   = Math.floor(arr.length / 2)
    let right = mergeSort(arr.slice(mid));
    let left  = mergeSort(arr.slice(0, mid));
    return merge(right, left);
}

console.log(mergeSort([3,7,3,6,83,53,13,56,87]));

//======= Radix sort practice ==========//

// Helper
// Returns the digit in num at the given place value
const getDigit = (num, i) => {
    return Math.floor( Math.abs(num) / Math.pow(10, i) ) % 10;
}

//Count how many digit in the number
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor( Math.log10(Math.abs(num)) ) + 1;
}

// Find how many digit is most in the array
const mostDigit = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max( maxDigits, digitCount(nums[i]) );
    }
    return maxDigits;
}

// Radix sort
const radixSort = (nums) => {
    let maxDigitCount = mostDigit(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
console.log(radixSort([23,64,865,5634,4567,744,34,25,7655]));