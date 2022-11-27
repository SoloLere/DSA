/*
Brute Force approach
TC: O(N**2), SC: O(N)
*/

var findAnagrams = function(s, p) {
    let arr = [];
    let str1 = p.split('').sort().join('');
    console.log(str1)
    for (let i = 0; i < s.length - p.length + 1; i++){
        let str2 = s.slice(i,i + p.length).split('').sort().join('');
        if (str1 === str2) arr.push(i);
    }
    return arr;
};

/*
Anagram Approach
TC: O(M + 26*N) => 0(N), SC: O(26 * 2 + N(worst case)) => 0(N)
*/
var findAnagrams = function(s, p) {
    let arr = [];
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
    
    for(let char of p){
        let index = char.charCodeAt(0) - a;
        ++arr1[index]
    }
    
    for(let r = 0; r < s.length; r++){
        let r_char_index = s[r].charCodeAt(0) - a;
        ++arr2[r_char_index];
        
        if(r >= p.length - 1){
            if (compare(arr1, arr2)) arr.push(l);

            // shrink window
            let l_char_index = s[l].charCodeAt(0) - a;
            --arr2[l_char_index];
            l++
            
        }
    }
    return arr
    
};

/*
Sliding Window Approach
TC: O(M + N) => 0(N), SC: O(M)
*/
var findAnagrams = function(s, p) {
    let arr = [];
    let obj = {};
    let l = 0;
    let match = 0;
    
    for (let char of p){
        obj[char] = ++obj[char] || 1;
        
    }
    for (let r = 0; r < s.length; r++){
        let right_char  = s[r];
        if (right_char in obj){
            --obj[right_char];
            if (obj[right_char] === 0) match++
        }
        
        if (match === Object.keys(obj).length) arr.push(l);
        
        if (r >= p.length - 1){
            let left_char = s[l]
            if (left_char in obj){
                if (obj[left_char] === 0) match--
                ++obj[left_char]
            }
            
            l++
        }
    }
    return arr;
    
};