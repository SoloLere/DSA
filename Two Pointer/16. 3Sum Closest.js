/*
TC: O(N**2 + NlogN) === O(N**2), SC: O(N)
// pick the current iteration as hinge, use two pointer to iterate over other numbers
*/

var threeSumClosest = function(nums, target) {
    let arr = nums.sort((a,b) => a - b);
    let least = Infinity;
    let output; // used an extra variable to save me from doing calculations
    
    for(let i = 0; i < arr.length; i++){
        let l = i + 1;
        let r = arr.length - 1;
        
        while(l < r){
            let sum = arr[i] + arr[l] + arr[r];
            if (sum === target) return sum;
            
            let diff = Math.abs(target - sum);
                if (diff < least){
                    least = diff;
                    output = sum;
                }
            
            if (sum < target){
                l++;
            }
            else{
                r--;
            }
        }
    }
    
    return output;
};

var threeSumClosest = function(nums, target) {
    let arr = nums.sort((a,b) => a - b);
    let least = Infinity;
    
    for(let i = 0; i < arr.length; i++){
        let l = i + 1;
        let r = arr.length - 1;
        
        while(l < r){
            let sum = arr[i] + arr[l] + arr[r];
            if (sum === target) return sum;
            
            // little caluculation to get smallest difference
            let diff = target - sum;
                if (Math.abs(diff) < Math.abs(least)){
                    least = diff;
                }
            
            if (sum < target){
                l++;
            }
            else{
                r--;
            }
        }
    }
    
    return target - least;
};