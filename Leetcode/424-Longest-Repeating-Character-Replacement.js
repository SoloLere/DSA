/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let obj = {};
    let left = 0;
    let maxFreq = 0;
    let maxLen = 1;
    //curlength - maxfreq <= k to get a valid substring
    for (let right = 0; right < s.length; right++){
        obj[s[right]] = ++obj[s[right]] || 1;
        maxFreq = Math.max(maxFreq, obj[s[right]]);
        let curLen = right -left + 1;

        if (curLen - maxFreq <= k){
            maxLen = Math.max(maxLen, curLen);
        }else{
            --obj[s[left]];
            left++;
        }
    }
    return maxLen;
};

// I noticed that once i get a max, the length of my substring wouldn't reduce, it keeps increasing i.e if the MaxLen = 4, the lenght of the next substring will be 5, I'll check if the five can beat the four.