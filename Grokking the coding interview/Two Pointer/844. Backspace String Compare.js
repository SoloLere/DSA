/**
 * TC: O(N)
 * SC: O(1)
 */
var backspaceCompare = function(s, t) {
    return compare(s) === compare(t);
};

const compare = (word) => {
    while (word.includes('#')) {
        const index = word.indexOf('#')
        word = word.substr(0, index-1) + word.slice(index+1)
    }
    return word
}

/**
 * TC: O(N)
 * SC: O(1)
 */
 var backspaceCompare = function(s, t) {
    return compare(s) === compare(t);
};

function compare(word){
    let str = word.slice(0);
    if (str.length = 0) return '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            if (i>0){
                str = str.substring(0,i-1) + str.substring(i+1);
                i-=2
            }
            else{
               str =  str.substring(i+1);
                i--
            }
        } 
    }
    return str;
} 

/**
 * Two Pointer
 * TC: O(N)
 * SC: O(1)
 */
 var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    while(i >= 0 || j >= 0){
        let p = validIndex(i,s);
        let q = validIndex(j, t) ;
        
        if (p >= 0 && q >= 0){
            if (s[p] !== t[q]) {
                return false
            }
            else {
                i = --p;
                j = --q;
            } 
        }
        else{
            if (p >= 0 || q >= 0) return false;
             if (p <= 0 && q <= 0) return true
        }
     


    }
    return true ;
};

function validIndex (i, str){
    let count = 0;
    while(i >= 0){
        if (str[i] === '#') count++;
        else if (count > 0) count--;
        else break;
        i--;
    }
    return i;
} 