/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

/*
Sliding Window Approach
TC: O(N*M*M_len), SC: O(M + N) (I will be storing all the words in the two HashMaps. In the worst case, we also need O(N)O(N) space for the resulting list)
*/

 var findSubstring = function(s, words) {
    let obj = {};
    let output = [];
    let words_length = words.length;
    let char_length = words[0].length;
    
    for (let char in words){
        obj[words[char]] = ++obj[words[char]] || 1;
    }
    
    for(let i = 0; i < s.length - words_length * char_length + 1; i++){
        let match = {};
        for (let j = 0; j < words_length ; j++){
            let index = i + j * char_length;
            let word = s.substring(index, index + char_length);
            
            // is word not in obj?
            if(!(obj[word])) break;
            
            // add word to match
            match[word] = ++match[word] || 1;
            
            // is frequency of word in match > frequency in obj?a
            if (match[word] > obj[word]) break;
            
            // found a concatenated substring?
            if (j + 1 === words_length) output.push(i)
        }
        
    }
    
    return output
};