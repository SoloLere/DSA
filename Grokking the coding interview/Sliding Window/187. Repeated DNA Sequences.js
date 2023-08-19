// TC: O(N), SC: O(N)

var findRepeatedDnaSequences = function(s) {
    let res = new Set(), seen = new Set();
    
    for (let i = 0; i < s.length - 9; i++){
        // create substring
        let str = s.substring(i, i + 10);

        // add substring to seen or res if already in seen
        if (seen.has(str)) res.add(str);
        else seen.add(str)
    }
    
    // res was a set in order to avoid duplication
    return Array.from(res)
};