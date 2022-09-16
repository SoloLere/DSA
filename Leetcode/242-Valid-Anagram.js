/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // i can make an array from the Charcode of each letter, indexed from 0 to 26;
    // i.e if the two a's, index 0 will be 2;
    if (s.length !== t.length) return false;
    let arrS = Array(26).fill(0);
    let arrT = Array(26).fill(0);
    let a = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++){
        let index = s.charCodeAt(i) - a;
        arrS[index]++;
    }
    for (let i = 0; i < t.length; i++){
        let index = t.charCodeAt(i) - a;
        arrT[index]++;
    }
    for (let i = 0; i < arrS.length; i++){
        if (arrS[i] !== arrT[i]) return false; 
    }
    return true;
};

console.log(isAnagram('nl', 'cx'));

// I used an array O(N) space complexity
// TC = O(26) == O(1);