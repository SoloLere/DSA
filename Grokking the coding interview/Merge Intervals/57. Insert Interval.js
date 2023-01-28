/**
 *  TC: O(N) SC: O(N)
 */

var insert = function(intervals, newInterval) {
    let output = [];
    for(let i = 0; i < intervals.length; i++){
        // Not intersecting
        // interval < new interval
        if(intervals[i][0] > newInterval[1]){
            output.push(newInterval, ...intervals.splice(i));
            return output;
        }
        else if (intervals[i][1] < newInterval[0]){
            output.push(intervals[i])
        }
        
        // Intersecting
        else{
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
        }
    }
    
    output.push(newInterval);
    return output
};