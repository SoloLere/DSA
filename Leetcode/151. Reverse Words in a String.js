/*
TC: O(N), SC: O(N)
*/
var reverseWords = function(s) {
    let arr = s.trim().split(' ');
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] !== ''){
            result = i > 0 ?  result.concat(arr[i], ' ') : result.concat(arr[i]);
        }
    }
    return result;
};