// Fruits into Baskets 

// Brute Force Approach
/* TC:O(N^2) : The outer loop will loop through through each element. O(N),the innerloop will loop also run on each element N times

    SC:O(N^2) : I'll create an Hashmap N times and it will store N properties each time;
*/
// get all possible substrings
// check if the unique elements are 2, if it is, maxLen = length


function fruits(arr) {
    let maxFruits = 0;
    for (let left = 0; left < arr.length; left++){
        let obj = {};
        for(let right = left; right < arr.length; right++){
            obj[arr[right]] = ++obj[arr[right]] || 1;
            if (Object.keys(obj).length === 2 || (Object.keys(obj).length === 1 && obj[arr[right]] >= 1)){
                maxFruits = Math.max(maxFruits, right - left + 1)
            }
        }
    }
    return maxFruits;
}


// Sliding window Approach
/* TC:O(N^2) : The outer loop will loop through through each element. O(N),the innerloop will also loop through each element once

    SC:O(1) : I'll create an Hashmap once and it will store max of 3 properties at a time;
*/
function fruits(arr) {
    let left = 0;
    let obj = {};
    let maxFruits = 0;

    for (let right = 0; right < arr.length; right++){
        currentFruit = arr[right];
        if (obj[currentFruit]){
            ++obj[currentFruit];
        }else{
            obj[currentFruit] = 1;
        }

        while (Object.keys(obj).length > 2){
            leftmostFruit = arr[left];
            obj[leftmostFruit] -= 1;
            left++;
            if (obj[leftmostFruit] === 0){
                delete obj[leftmostFruit];
            }
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
        
    }
    return maxFruits;
}

// ['A', 'B', 'C', 'B', 'B', 'C']
// ['A', 'B', 'C', 'A', 'C']
fruits(['A', 'B', 'C', 'A', 'C']);