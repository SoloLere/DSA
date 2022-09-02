function getDigit(num, i){// gets the ith digit of num
    return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
}

function digitCount(num){// count number of digits a num has
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr){// find max digit in the arr
    let maxDigits = 0;
    for(let i = 0; i < arr.length; i++){
        maxDigits = Math.max(digitCount(arr[i], maxDigits))
    }

    return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++){
            // get the kth digit of a num and places the 
            // num in the kth digit positin array of digitBuckets
            digitBuckets[getDigit(nums[i],k)].push(nums[i])
        }
        nums = [].concat(...digitBuckets);
        // console.log(nums);
    }
    return nums;
}

radixSort([23,345,5467,12, 2345,9852])