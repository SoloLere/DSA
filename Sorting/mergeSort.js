function merge(arr1,arr2){
    let first = 0;
    let second = 0;
    let arr = [];

    // compare between arr1, arr2. Push the smallest into arr;
    while (first < arr1.length && second < arr2.length){
        if (arr1[first] <=  arr2[second]){
            arr.push(arr1[first]);
            first ++;
        }else {
            arr.push(arr2[second]);
            second++;
        }
        
    }

    // incase one array comparism finishes before the other, 
    //then I will have to push the rest of the elements in other into arr.
    // remember, arr1 and arr 2 are sorted;
    
    if (first === arr1.length){
        arr.push(...arr2.slice(second));
    } else if (second === arr2.length){
        arr.push(...arr1.slice(first));
    }

    return arr;
}

console.log(mergeSort([10,15,1,2,6,3]));

function mergeSort(arr){
    // base condition

    // arrays will be reduced until theres only 1 element array left
    if (arr.length <= 1) return arr; 
    
    let left = mergeSort(arr.slice(0,Math.floor(arr.length/2)));
    let right = mergeSort(arr.slice(Math.floor(arr.length/2)));

    newArr = merge(left,right);
    return newArr;
}

// split arrays until theres only one element array left, afterwards
// sort and marge the smaller arrays to form the starting arr