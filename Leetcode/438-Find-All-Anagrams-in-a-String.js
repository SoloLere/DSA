/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

function equalArray(a,b){
    for(let i = 0; i < a.length; i++){
        if (a[i]!==b[i]) return false;
    }
    return true;
}
 var findAnagrams = function(s, p) {
    let result = [];
    if (p.length > s.length) return [];
    let arrS = Array(26).fill(0);
    let arrP = Array(26).fill(0);
    let a = 'a'.charCodeAt(0);
    // since the input string is all small letter, i can get their charcode 
    // populate arrP by incrementing respective charcodes of its elements
    // element with charcode 0 will be @ index 0, charcode 25 will be @ index 25
    for (let i = 0; i < p.length; i++){
        let char = p.charCodeAt(i) - a;
        arrP[char]++;
    }
    for (let right = 0; right < s.length; right++ ){
        if (right >= p.length){
            // increment the current element charcode
            let char = s.charCodeAt(right) - a;
            arrS[char]++;
            // decrement the element before the leftmost element charcode
            let del = s.charCodeAt(right - p.length) -a;
            arrS[del]--;
        }else{
            // increment the current element charcode
            let char = s.charCodeAt(right) - a;
            arrS[char]++;
        }
        // if both arrays are equal, do the needful
        if (equalArray(arrS,arrP)) result.push(right - p.length + 1);
    }
    return result
};


console.log(findAnagrams("cbaebabacd","abc"));

// the trick is to use the 26 letter of the alphabet as your array index
// Each letter in the string will have a corresponding frequency in the arra