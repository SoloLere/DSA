/* 
I'm not really changing any character to uppercase, the way around it is to check if my current length minus
the higest frequency character give me a value less than
k, else reduce my sliding window
*/


// TC: O(N*26) worstcase => O(N);
// SC: O(26) worstcase  = (1);
var characterReplacement = function(s, k) {
    let obj = {};
    let left = 0;
    let longest = 0;
    for(let right = 0; right  < s.length; right++){
        // add current char to obj
        obj[s[right]] = ++obj[s[right]] || 1;
        let maxFreq = Math.max(...Object.values(obj));

        // check conditons
        while (right - left + 1 - maxFreq > k){
            obj[s[left]] === 1? delete obj[s[left]] : --obj[s[left]];
            left++
        }
        longest = Math.max(longest, right - left + 1);
        
    }
    return longest;

};


/*
k is constant, length is increasing
if length - maxFrex <= K
bigger lengths will not always satisfy this condition
any bigger length that satisfy this condition should be the maximum length
smaller lengths will always satisfy this condition
*/