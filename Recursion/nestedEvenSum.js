// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

// function nestedEvenSum(obj){
//     // is the value an object?
//     //  is the value even, push to an array
//     let sum = 0;
//     for (let key in obj){
//         if (typeof(obj[key]) ==='object' && obj[key] !== null ){
//            sum+=nestedEvenSum(obj[key]);
//         } else if (obj[key] % 2 !== 0){
//             continue
//         } else {
//             sum+=obj[key];
        
//         }
//     }

//     return sum;
    
// }


// const obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: 'yup'
//       }
//     }
// };
  
// const obj2 = {
//     a: 2,
//     b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//     c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//     d: 1,
//     e: { e: { e: 2 }, ee: 'car' }
// };
  
// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

function nestedEvenSum(obj){
    // is the value an object?
    //  is the value even, push to an array
    let newArr = [];
    for (let key in obj){
        if (typeof(obj[key]) ==='object' && obj[key] !== null ){
            newArr = newArr.concat(nestedEvenSum(obj[key]));
        } else if (obj[key] % 2 !== 0){
            continue
        } else {
            newArr.push(obj[key])
        
        }
    }

    return newArr.reduce((x,y) => x + y, 0);
    
}


const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: 'yup'
      }
    }
};
  
const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};
  
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10