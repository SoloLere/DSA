/*
Brute Force approach
TC: O(N**2), SC: O(N)
*/

var longestOnes = function(nums, k) {
    // get all possible substrings
    // create an object containing the substrings and frequency
    // if frequency of 0 in a substring is > than k forget it else find its length
    
    let length = 0;
    for(let i = 0; i < nums.length; i++){
        let obj = {};
        for(let j = i; j < nums.length; j++){
            obj[nums[j]] = ++obj[nums[j]] || 1;
            if(obj[0] > k) break;
            length = Math.max(length, j - i + 1);
        }
    }
    
    return length;
};


/*
Sliding window approach
TC: O(N), SC: O(N)
*/
var longestOnes = function(nums, k) {
    let length = 0;
    let l = 0;
    let map = new Map();
    for(let r = 0; r < nums.length; r++){
        map.set(nums[r],  map.get(nums[r]) + 1 || 1);
        while(map.get(0) > k){
            map.get(0) > 1 ? map.set(nums[l], map.get(nums[l]) - 1) : map.delete(nums[l]);
            l++;
        }
        length = Math.max(length, r - l + 1);
    }
    
    return length;
};

/*
Sliding window approach
TC: O(N), SC: O(1)
*/

var longestOnes = function(nums, k) {
    let length = 0;
    let l = 0;
    let count = 0
    for(let r = 0; r < nums.length; r++){
        if (nums[r] === 0) count++;
        while(count > k){
            if (nums[l] === 0) count--;
            l++
        }
        length = Math.max(length, r - l + 1);
    }
    
    return length;
};

// similar to 424: longest repeating character replacement

var longestOnes = function(nums, k) {
    let l = 0;
    let max = 0;
    let max_one = 0;

    for(let i = 0; i < nums.length; i++){
        if (nums[i] === 1) max_one++

        while ((i - l + 1) - max_one > k){
            // shrink
            if(nums[l] === 1){
                max_one--
            }
            l++
        }

        max = Math.max(max, i - l + 1)

    }

    return max
};