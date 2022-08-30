// collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

function collectStrings(obj){
    let arr = [];
    for (let char in obj){
        if (typeof obj[char] === String){
            arr.push(obj[char])
        }else if (typeof obj[char] === Object){
            arr = [...arr, ...collectStrings(obj[char])]
        }
    }

    return arr;
}

const obj = {
    stuff: 'foo',
    data: {
      val: {
        thing: {
          info: 'bar',
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: 'baz'
            }
          }
        }
      }
    }
  };
  
  console.log(collectStrings(obj)); // ['foo', 'bar', 'baz'])