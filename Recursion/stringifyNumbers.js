// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

function stringifyNumbers(obj){
    for (let char in obj){
      if (typeof(obj[char]) === 'number') {
        obj[char] = obj[char].toString();
      }else if (typeof(obj[char]) === 'object'){
        stringifyNumbers(obj[char]);
      }else {continue};
    }

    return obj;
}


const obj = {
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66
      }
    }
};

console.log(stringifyNumbers(obj));
// { num: '1',
//   test: {},
//   data: { val: '4', info: { isRight: true, random: '66' } } }