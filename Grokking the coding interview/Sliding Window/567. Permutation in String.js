/*
Brute Force approach
TC: O(NlogN * N), SC: O(N)
*/
var checkInclusion = function(s1, s2) {
    let str1 = s1.split('').sort().join();
    for(let l = 0; l < s2.length - s1.length + 1; l++){
        let str2 = s2.slice(l, l + s1.length).split('').sort().join();
        if(str1 === str2) return true
    }
    return false
};

/*
Anagram Approach
TC: O(M + 26*N) => 0(N), SC: O(26 * 2) => 0(1)
*/
var checkInclusion = function(s1, s2) {
    let arr1 = Array(26).fill(0);
    let arr2 = Array(26).fill(0);
    let a = 'a'.charCodeAt(0);
    let l = 0;
    
    const compare = function(a,b){
        for (let i = 0; i < a.length; i++){
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    
    for(let char of s1){
        let index = char.charCodeAt(0) - a;
        ++arr1[index]
    }
    
    for(let r = 0; r < s2.length; r++){
        let r_char_index = s2[r].charCodeAt(0) - a;
        ++arr2[r_char_index];
        
        if(r >= s1.length - 1){
            if (compare(arr1, arr2)) return true;
            else{
                // shrink window
                let l_char_index = s2[l].charCodeAt(0) - a;
                --arr2[l_char_index];
                l++
            }
            
        }
    }
    return false
    
};

/*
Sliding Window Approach
TC: O(M + N) => 0(N), SC: O(M)
*/
var checkInclusion = function(s1, s2) {
    let obj = {};
    let l = 0;
    let match = 0;
    
    for (let char of s1){
        obj[char] = ++obj[char] || 1;
        
    }
    for (let r = 0; r < s2.length; r++){
        let right_char  = s2[r];
        if (right_char in obj){
            --obj[right_char];
            if (obj[right_char] === 0) match++
        }
        
        if (match === Object.keys(obj).length) return true;
        
        if (r >= s1.length - 1){
            let left_char = s2[l]
            if (left_char in obj){
                if (obj[left_char] === 0) match--
                ++obj[left_char]
            }
            
            l++
        }
    }
    return false
    
};