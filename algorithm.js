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