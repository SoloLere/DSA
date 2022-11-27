/*
Brute Force approach
TC: O(N**2), SC: O(N)
*/
function lengthOfLongestSubstringKDistinct(s, k) {
    // write your code here
    // Brute Force
    
    let max = -Infinity;
    for(let i = 0; i < s.length; i++){
        let set = new Set();
        for(let j = i; j < s.length; j++){
            set.add(s[j]);
            if (set.size > k) break;
            max = Math.max(max, j - i + 1)
        }
    }
    return max
}

/*
Sliding window approach
TC: O(N + N), SC: O(N)
*/
function lengthOfLongestSubstringKDistinct(s, k) {
    // write your code here
    let map = new Map();
    let max = -Infinity;
    let l = 0;

    for(let r=0; r < s.length; r++){
      // add current iteration to map
      map.set(s[r], map.get(s[r]) + 1 || 1);
      while(map.size > k){
        // reduce current iteration or delete if value is 1
        map.get(s[l]) > 1 ? map.set(s[l], map.get(s[l]) - 1) : map.delete(s[l]);
        l++;
      }
      max = Math.max(max, r-l+1)
    }

    return max
}