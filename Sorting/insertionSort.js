// function insertionSort(arr){
//     const swap = (arr,a,b)=>{
//         [arr[a],arr[b]] = [arr[b], arr[a]];
//     };
//     for(let i = 1; i<arr.length; i++){
//         for (let j= i-1; j>=0; j--){
//             if (arr[j] > arr[j+1]) swap(arr,j,j+1);
//         }
//     }
//    return arr; 
// }

// console.log(insertionSort([11,3,6,1,7,10,-1]));



function insertionSort(arr){
    for(let i = 1; i<arr.length; i++){
        let current = arr[i]
        for (var j = i-1; j >= 0; j--){//  or j >= 0 && arr[j] > current , this saves me the else -- break
            if (arr[j] > current) {
                arr[j+1] = arr[j];
            }else break;
        }
        arr[j+1] = current;// had I used let j = i - 1, i won't be able to know its value outside the loop
    }
   return arr; 
}

console.log(insertionSort([11,3,6,1,7,10,-1]));

