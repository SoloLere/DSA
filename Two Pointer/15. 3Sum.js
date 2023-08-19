/*
TC: O(N**2 + NlogN) === O(N**2), SC: O(N)
// pick the current iteration as hinge, use two pointer to iterate over other numbers
*/

var threeSum = function(nums) {
    let arr = nums.sort((a,b) => a - b);
    let output = [];
    
    for(let i = 0; i < arr.length - 2; i++){
        let current = arr[i];
        if (arr[i] === arr[i - 1]) continue;
        let left = i + 1;
        let right = arr.length - 1;
        sum_compare(current, left, right);
    }
    
    function sum_compare(current, l, r){
        while(l < r){
            let sum =  current + arr[l] + arr[r];
            if(sum === 0){
                output.push([current, arr[l], arr[r]]);
                l++;
                r++;
                while (l < r && arr[l] === arr[l-1]) l++;
            }
            else if (sum  < 0) l++;
            else r--;
        }
    }
    return output;
};