/**
 * TC: O(N)
 * SC: O(1)
 */
 var maxArea = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    let max = 0;
    while(l < r){
        let cont = Math.min(arr[l],arr[r]) * (r-l) ;
        max = Math.max(max,cont);
        if (arr[l] <= arr[r]) l++;
        else r--
    } 
    return max
};

