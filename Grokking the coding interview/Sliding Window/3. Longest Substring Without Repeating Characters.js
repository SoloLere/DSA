// TC: O(N)
// SC: 0(N)  worst case
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let mySet = new Set();
    let longest = 0;

    for (let right = 0; right < s.length; right++){
        while (mySet.has(s[right])){
            mySet.delete(s[left]);
            left++;
        }
        mySet.add(s[right]);
        longest = Math.max(longest, right - left + 1);
        
    }
    return longest;
};