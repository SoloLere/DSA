// TC: O(N^2) SC: O(1)

var moveZeroes = function(nums) {
    let len = 0;
    let i = 0;
    while (len < nums.length){
        if(nums[i] == 0){
            let x = nums.splice(i, 1);
            nums.push(x);
            i--;
        }
        i++
        len++
    }
    return nums
};

// TC: O(N) SC: O(1)
var moveZeroes = function(nums) {
    let l = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            // swap
            [nums[i], nums[l]] = [nums[l], nums[i]]
            l++
        }
    }
    return nums
};