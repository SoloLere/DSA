/*
Brute Force approach
TC: O(N**2), SC: O(N)
*/

var lengthOfLongestSubstring = function(s) {
    let length = 0;
    
    for(let i = 0; i < s.length; i++){
        let set = new Set();
        for(let j = i ; j < s.length; j++){
            if (!set.has(s[j])){
                set.add(s[j]);
            }
            else{
                break
            }
            length = Math.max(length, set.size)
        }
    }
    return length;
};

/*
Sliding window approach
TC: O(N), SC: O(1)

// always shifting the left window if set has character
*/

var lengthOfLongestSubstring = function(s) {
    let length = 0;
    let set = new Set();
    let l = 0;
    
    for(let r = 0; r < s.length; r++){
       while(set.has(s[r])){
           set.delete(s[l]);
           l++;
       }
        set.add(s[r]);
        length = Math.max(length, r - l + 1)
    }
    return length;
};