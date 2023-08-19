/*
Two pointer approach
TC: O(N), SC: O(N)
*/

var sortedSquares = function(nums) {
    let l = 0, r = nums.length - 1;
    let arr = new Array(nums.length).fill(0);
    
    for(let i = r; i >= 0; i--){
        let leftSquare = nums[l] ** 2;
        let rightSquare = nums[r] ** 2;
        if ( leftSquare >= rightSquare ){
            arr[i] = leftSquare;
            l++
        }
        else {
            arr[i] = rightSquare;
            r--;
        }
    }
    
    return arr;
};