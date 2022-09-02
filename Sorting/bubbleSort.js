// function  swap(arr,a,b){
//     [arr[a], arr[b]] = [arr[b], arr[a]];
// }

// function bubbleSort(arr){
//     for (let i = arr.length; i > 0; i--){
//         for (let j = 0; j < i - 1; j++){
//             if (arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1);
//             }
//         }
//     }

//     return arr;
// }

// bubbleSort([5,3,4,1,2]);
//[5,3,4,1,2]
//[3,4,1,2,5]i = 5
//[3,4,1,2,5]i = 4
//[3,1,2,4,5]i = 3
//[1,2,3,4,5]i = 2
//[]break

function swap(arr,a,b){
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function bubbleSort(arr){
    let noSwaps; // optimise for condition where array is almost sorted
    for (let i = arr.length; i > 0; i--){
        noSwaps = true; // the loop will break if at the end noSwaps is still true
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
            console.log(arr, arr[j], arr[j+1])
        }
        if (noSwaps) break;
    }

    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

/*
Does comparinsm between [a,b], if a > b swap, so that the smaller will be in front;
*/