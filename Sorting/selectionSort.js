function selectionSort(arr){
    for(let i = 0; i< arr.length - 1;i++){
        let smallest = i;
        let miniumum = i;
        for(let j = i + 1; j<arr.length; j++){
            if (arr[j] < arr[smallest]) smallest = j;
        }
        if (miniumum !== smallest) swap(arr,miniumum, smallest);
    }

    return arr;
}


function swap (arr,a,b){
[arr[a], arr[b]] = [arr[b], arr[a]];
};

console.log(selectionSort([5,3,4,1]));

/*
Select the first element, loops through the array and find the smallest
element and switch it with first, afterwards, move on to second
*/