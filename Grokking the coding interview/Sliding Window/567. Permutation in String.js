// Brute force approach 
// TC: O(NlogN)
// SC: O(N)
var checkInclusion = function(s1, s2) {
    let sorted1 = s1.split('').sort().join('');
    let left = 0;
    for (let right = sorted1.length; right < s2.length + 1; right++){
        let str2 = s2.slice(left, right);
        sorted2 = str2.split('').sort().join('');
        if (sorted2 === sorted1) return true;
        left++;
    }
    return false;
};

// Charcode approach 
// TC: O(N * 26) => O(N)
// SC: O(1)
var checkInclusion = function(s1, s2) {
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    let charA = 'a'.charCodeAt(0);
    
    for(let i = 0; i < s1.length; i++){
        let index = s1.charCodeAt(i) - charA;
        arr1[index]++
    }
    
    let left = 0;
    // let str = s2.slice(left, s1.length - 1);
        
    // for(let i = 0; i < str.length; i++){
    //     let index = str.charCodeAt(i) - charA;
    //     arr2[index]++;
    // }
    
    function arrayComparator(arr1, arr2){
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] !== arr2[i]) return false
        }
        return true;
    }
    
    for(let right = 0; right < s2.length; right++){
        let index = s2.charCodeAt(right) - charA;
        arr2[index]++;
        
        if (right >= s1.length - 1){
            if (arrayComparator(arr1,arr2)) return true;
            else{
                let i = s2.charCodeAt(left) - charA;
                arr2[i]--;
                left++;
            }

        }
    }
    return false;
};