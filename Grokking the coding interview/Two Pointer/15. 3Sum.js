/**
 * @param {number[]} nums
 * @return {number[][]}
 * // TC: O(N^2 + NlogN) SC: O(N)=> because of sorting
 */
 var threeSum = function(nums) {
    let arr = nums.sort((a,b) => (a-b));
    let output = [] 
    //console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) continue;
        let l = i + 1;
        let r = arr.length - 1;
        twoSum(arr,l,r,i, output) 
    } 
    return output;
};

 function twoSum(arr,l,r,current, output){

     while (l < r) {
         //console.log(l, r) 
         let sum = arr[current] + arr[l] + arr[r];
         if (sum === 0){
             output.push([arr[current],arr[l],arr[r]]);
             l++;
             r--;
             
             while (l < r && arr[l] === arr[l-1]) l++;
         }
         else if (sum > 0) r--;
         else l++;
         
     } 
 } 