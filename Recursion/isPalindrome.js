// isPalindrome
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

// function isPalindrome(string){
//     function reverse(str){
//         if (str.length === 1) return str;
    
//         return str[str.length-1] + reverse(str.substring(0,str.length-1));
//     }
//     reverse(string)

//     return string === reverse(string);
// }

function isPalindrome(string){
    if (!string.length) return true;
    if(string[0] !== string[string.length-1]) return false;
    return isPalindrome(string.slice(1,string.length-1))
}

console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false