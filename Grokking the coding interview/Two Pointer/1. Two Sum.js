// Brute force approach
// TC: O(N^2) SC: O(1)
function pair_with_targetsum (arr, target_sum){
    for (let start = 0; start < arr.length; start++){
        for (let end = start; end < arr.length; end++){
            if (arr[start] + arr[end] === target_sum) return [start, end];
        }
    }
    return [-1,-1];
}

// Optimized approach using two pointers
// TC: O(N) SC: O(1);
function pair_with_targetsum (arr, target_sum){
    let start = 0;
    let end = arr.length - 1;
    while (start < end){
        if (arr[start] + arr[end] === target_sum) return [start,end];
        else if (arr[start] + arr[end] > target_sum) end--;
        else start++
    }
    return [-1,-1];
}

// Optimized approach using HashMap
// TC: O(N) 
// SC: O(N) => worst case I'll have to add difference between target and all array element into the object
function pair_with_targetsum (arr, target_sum){
    const  obj = {};
    for (let current = 0; current < arr.length; current++){
        let difference = target_sum - arr[current];
        if (difference in obj) return [obj[difference], current];
        obj[arr[current]] = current;
    }
    return [-1,-1];
}



pair_with_targetsum([1,2,3,4,6], 6);
pair_with_targetsum([2,5,9,11], 11);