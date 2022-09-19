// Longest Substring with K Distinct Characters (medium)

// Brute force approach 
/* TC:O(N^2) : The outer for loop runs for all characters and the inner while loop processes all other character, 
therefore the time complexity of the algorithm will be O(N^N).*/
// SC:O(K) : I'll be stroring max of K Characters in the set;


function longest(str, k) {
    let maxLen = 0;
    for (let left = 0; left < str.length; left++){
        let mySet = new Set();
        for(let right = left; right< str.length; right++){
            mySet.add(str[right]);
            if (mySet.size <= k){
                maxLen = Math.max(maxLen, right - left + 1);
            }
            else if (mySet.size === k && mySet.has(str[right])){
                maxLen = Math.max(maxLen, right - left + 1);
            }
            else break;
        }
    }
    return maxLen;
}

// Optimized Approach
/* TC:O(N + N) => O(N) : The outer for loop runs for all characters and the inner while loop processes each character only once, 
therefore the time complexity of the algorithm will be O(N+N) which is equivalent to O(N). */
// SC:O(N) : The space complexity of the algorithm is O(K)O(K), as we will be storing a maximum of ‘K+1’ characters in the HashMap.
function longest(str, k) {
    const container = {};
    let left = 0;
    let maxLen = 0;
    
    for(let right = 0; right < str.length; right++){
        let currentLetter = str[right]  
        container[currentLetter] = ++container[currentLetter] || 1; 
        
        while(Object.keys(container).length > k){
            let leftmostChar = str[left]
            container[leftmostChar] === 1? delete container[leftmostChar] : --container[leftmostChar];
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1); 
    }
    return maxLen;
            
}

// String="araaci", K=2
// S = "eceba" and k = 3
// String="cbbebi", K=3
// String="WORLD", K=4
longest(String="cbbebi", K=3);