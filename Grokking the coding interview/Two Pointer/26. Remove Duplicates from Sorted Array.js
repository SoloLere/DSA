// TC: O(N) SC: O(1)

var removeDuplicates = function(arr) {
    let no_of_duplicates = 1;
    for(let index = 1; index < arr.length; index++){
        if (arr[no_of_duplicates - 1] !== arr[index]){
            arr[no_of_duplicates] = arr[index];
            no_of_duplicates++;
        }
    }
    return no_of_duplicates;
};

// TC: O(N) SC: O(1)

 var removeDuplicates = function(arr) {
    let no_of_duplicates = 1;
    for(let index = 1; index < arr.length; index++){
        if (arr[index - 1] !== arr[index]){
            arr[no_of_duplicates] = arr[index];
            no_of_duplicates++;
        }
    }
    return no_of_duplicates;
};