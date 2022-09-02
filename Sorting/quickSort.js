function pivot(arr, start = 0, end = arr.length -1){
    const swap = (a,b)=> [arr[a], arr[b]] = [arr[b], arr[a]];

    // assuming my pivot is 0;
    let pivotIndex = start; // current element to be shifted also count to know final position to put start
    for (let i = start + 1; i <= end ; i++){
        if (arr[start] > arr[i]){
            pivotIndex++; // increase pivotIndex
            swap(i, pivotIndex); // swap the current big element with element after my pivot === pivotIndex 
        }
    }
    swap(start, pivotIndex); // put start in the correct position
    return pivotIndex;
    
}

function quickSort(arr, start = 0, end = arr.length-1){
    if (start < end){
        let pivotIndex = pivot(arr, start, end);
        // left
        quickSort(arr,start, pivotIndex-1);// breaks down the arr until it has 2 elements and sort it
        // right
        quickSort(arr,pivotIndex+1,end);
    }

    return arr;
}

console.log(quickSort([3,5,2,1,9,8]));
