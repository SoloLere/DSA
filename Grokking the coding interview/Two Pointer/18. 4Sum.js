/**
 * TC: O(N^3)
 * SC: O(N)
 */
var fourSum = function(nums, target) {
    let output = [];
    let arr = nums.sort((a, b) => a - b) ;
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i-1]) continue;
        for (let j = i+1; j < arr.length ;j++) {
            if (j > i+1 && arr[j] === arr[j-1]) continue;
            let l = j+1;
            let r = arr.length - 1;
            while ( l<r) {
                let sum = arr[i] + arr[j] + arr[l] + arr[r];
                if(sum ===target){
                    output.push([arr[i], arr[j], arr[l], arr[r]]);
                    l++;
                    r--;
                    while(arr[l] === arr[l-1]) l++
                }
               else if (sum < target ) l++;
                else r--;
            } 
        } 
    } 
    return output;
};