/**
 * TC: O(N)
 * SC: O(1)
 * 
 * So our final algorithm will look like:

1. From the beginning and end of the array, find the first elements that are out of the sorting order. The two elements will be our candidate subarray.
2. Find the maximum and minimum of this subarray.
3. Extend the subarray from beginning to include any number which is bigger than the minimum of the subarray.
4. Similarly, extend the subarray from the end to include any number which is smaller than the maximum of the subarray.
 */
 var findUnsortedSubarray = function(arr) {
    let l = 0;
    let r = arr.length-1;
    let min = Infinity
    let max = - Infinity;
    
    for(let i =0; i < arr.length; i++) {
        l =i ;
        if (arr[i] > arr[i+1]) break
    } 
    if (l === arr.length-1) return 0;
    
    for(let i =r; i > 0; i--) {

        r =i ;

        if (arr[i] < arr[i-1]) break

    }
    for(let i =l; i<r+1;i++){
        max = Math.max(max,arr[i]);
        min = Math.min(min,arr[i]);
    }
    for(let i = l-1; i >= 0;i--){
        if (arr[i] > min) l--
    }
    for(let i = r+1; i < arr.length ;i++){

        if (arr[i] < max) r++;

    }
    return r-l+1
};
/**
 * TC: O(N)
 * SC: O(N)
 */
 var findUnsortedSubarray = function(nums) {
    let arr= nums.slice().sort((a,b)=> a-b);
    let l = 0;
    for (let i = 0; i < arr.length; i++) {
        l = i;
        if (arr[i]!== nums[i] ) break;
    }
    if (l === arr.length - 1) return 0;
    
    let r = arr.length - 1;
    for (var i = r; i >= 0; i--) {

  

        if (arr[i]!== nums[i] ) break;

    }
    
    return i-l+1
};