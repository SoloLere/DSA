/**
 * @param {number[]} colors
 * @return {number}
 */
 var maxDistance = function(colors) {
    let left = 0;
    let right = colors.length - 1;
    while(colors[left] === colors[right]){
        right--;
    }
    let distance = right - left;
    left = 0;
    right = colors.length - 1;
    while(colors[left] === colors[right]){
        left++
    }

    if(right - left > distance) distance = right - left;
    return distance
};

/*Greedily, the maximum distance will come from either the pair of the leftmost house and possibly some house on the right with a different color, or the pair of the rightmost house and possibly some house on the left with a different color. */

console.log(maxDistance([4,4,4,11,4,4,11,4,4,4,4,4]));