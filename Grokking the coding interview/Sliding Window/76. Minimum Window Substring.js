/*
Sliding Window Approach
TC: O(N + N), SC: O(M)
*/
var minWindow = function(s, t) {
    // iterate over s, check if char in t, decrement its frequency in obj
    // if match = t, pick min r - l +1, save r,l
    
    let l = 0;
    let obj = {};
    let match = 0;
    let length = Infinity;
    let start = 0, end = 0;
    for(let char of t){
        obj[char] = ++obj[char] || 1;
    }
    
    for(let r = 0; r < s.length; r++){
        if (s[r] in obj){
            --obj[s[r]];
            if (obj[s[r]] === 0) match++
        }
        
        while(r >= t.length - 1 && match ===Object.keys(obj).length){
            if (r - l + 1 < length){
                length = r - l + 1;
                start = l;
                end = r + 1;
            }
            if (s[l] in obj){
                if (obj[s[l]] === 0) match--;
                ++obj[s[l]];
            }
            l++;
        }
    }
    
    return s.slice(start, end);
};