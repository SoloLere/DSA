/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * // TC: O(N + N) SC: O(1)
 */
 var sortColors = function(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = ++obj[arr[i]] || 1;
    } 
    for (let i = 0; i < arr.length; i++){
        let smallest = Math.min(...Object.keys(obj));
        arr[i] = smallest;
        if (obj[smallest] > 1) --obj[smallest];
        else delete obj[smallest];
    } 
    return arr
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * // TC: O(N) SC: O(1)
 */
 var sortColors = function(arr) {
    let i = 0;
    let l = 0;
    let r = arr.length - 1;
    while (i <= r){
        if (arr[i] === 0){
            [arr[i],arr[l]] = [arr[l], arr[i]];
            l++;
        }
        if (arr[i] === 2){
            [arr[i],arr[r]] = [arr[r], arr[i]];

            r--;
            i--;
        } 
        i++
    }
    return arr
};