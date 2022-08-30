// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

// function capitalizeFirst(arr){
//     let outputArr = [];
//     if (!arr.length) return;
//     outputArr = outputArr.concat([arr[0][0].toUpperCase() + arr[0].substring(1)],capitalizeFirst(arr.slice(1)));
//     return outputArr;
// }

// console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr){
    const newArr = [];
    if (!arr.length) return newArr;

    newArr.push(arr[0].toUpperCase());
    return [...newArr, ...capitalizeWords(arr.slice(1))];

    // newArr = newArr.concat(capitalizeWords(arr.slice(1)));
    // return newArr;
}

const words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']