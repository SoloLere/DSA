/*
Brute Force approach
TC: O(N**2), SC: O(N)
*/

var characterReplacement = function(s, k) {
    let length = 0;
    for(let i = 0; i < s.length; i++){
        let no_of_operations = k;
        let obj = {};
        for(let j = i; j < s.length; j++){
            obj[s[j]] = ++obj[s[j]] || 1;
            let max_freq = Math.max(...Object.values(obj))
            if (j - i + 1 - max_freq <= k){
                length = Math.max(length, j - i + 1);
            }
            else break;
            
        }
    }
    return length;
};

/*
Sliding window approach
TC: O(N), SC: O(N)
*/
var characterReplacement = function(s, k) {
    let length = 0;
    let l = 0;
    let obj = {};
    
    for(let r = 0; r < s.length; r++){
        obj[s[r]] = ++obj[s[r]] || 1;
        let max_freq = Math.max(...Object.values(obj))
        while  ((r - l + 1 - max_freq) > k){
            obj[s[l]] > 1 ? --obj[s[l]] : delete obj[s[l]];
            l++;
        }
        length = Math.max(length, r - l + 1)
    }
    return length;
};

// Faster
var characterReplacement = function(s, k) {
    let length = 0;
    let l = 0;
    let obj = {};
    let max_freq = 0;

    
    for(let r = 0; r < s.length; r++){
        obj[s[r]] = ++obj[s[r]] || 1;
        max_freq = Math.max(...Object.values(obj), max_freq)
        while  ((r - l + 1 - max_freq) > k){
            obj[s[l]] > 1 ? --obj[s[l]] : delete obj[s[l]];
            l++;
        }
        length = Math.max(length, r - l + 1)
    }
    return length;
};

// Implimentation using map
var characterReplacement = function(s, k) {
    let length = 0;
    let l = 0;
    let map = new Map();
    
    for(let r = 0; r < s.length; r++){
        map.set(s[r], ++map.get(s[r]) || 1 )
        let max_freq = Math.max(...map.values())
        while  ((r - l + 1 - max_freq) > k){
            map.get(s[l]) > 1 ? map.set([s[l]], --map.get(s[l])) : map.delete(s[l]);
            l++;
        }
        length = Math.max(length, r - l + 1)
    }
    return length;
};

var characterReplacement = function(s, k) {
    let length = 0;
    let l = 0;
    let map = new Map();
    let max_freq = 0;
    
    for(let r = 0; r < s.length; r++){
        map.set(s[r], map.get(s[r]) + 1 || 1 );
        max_freq = Math.max(...map.values(), max_freq);
        while  ((r - l + 1 - max_freq) > k){
            map.get(s[l]) > 1 ? map.set(s[l], map.get(s[l]) - 1) : map.delete(s[l]);
            l++;
        }
        length = Math.max(length, r - l + 1)
    }
    return length;
};