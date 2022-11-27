/*
Brute Force approach
TC: O(N**2), SC: O(N)
*/

var totalFruit = function(fruits) {
    // get all possible substring
    // find the max-len substring with at most 2 distict char
    
    let max = -Infinity;
    for(let i = 0; i < fruits.length; i++){
        let set = new Set();
        for(let j = i; j < fruits.length; j++){
            set.add(fruits[j]);
            if(set.size > 2) break;
            max = Math.max(max, j - i + 1);
        }
    }
    return max
};

/*
Sliding window approach
TC: O(N + N), SC: O(M): M = no. of fruits
*/

var totalFruit = function(fruits) {
    // check if number of distinct characters in current substring
    // number of distinct characters > 2, reduce my window
    // else keep increasing window
    
    let max = -Infinity;
    let obj = {};
    let l = 0;
    for(let r = 0; r < fruits.length; r++){
        obj[fruits[r]] = ++obj[fruits[r]] || 1;
        
        while (Object.keys(obj).length > 2) {
            obj[fruits[l]] > 1 ? --obj[fruits[l]] : delete obj[fruits[l]];
            l++;
        }
        max = Math.max(max, r - l + 1)
    }
    return max
};