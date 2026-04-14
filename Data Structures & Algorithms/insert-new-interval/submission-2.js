class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = new Array();

        let i = 0; 
        // STEP 1: Add initial intervals
        for (const[s, e] of intervals) {
            if (e < newInterval[0]) {
                res.push([s, e]);
                ++i;
            }
            else {
                break;
            }
        }

        // STEP 2: Add new interval
        if (i == intervals.length) { // no more intervals
            res.push(newInterval);
        }
        else {     
            while (i < intervals.length) {
                const[s, e] = intervals[i];
                if (s <= newInterval[1]) {
                    newInterval = [Math.min(s, newInterval[0]), Math.max(e, newInterval[1])]
                    ++i;
                }
                else {
                    break;
                }
            }
            res.push(newInterval);
        }

        // STEP 3: Add any remaining intervals
        while (i < intervals.length) {
            res.push(intervals[i]);
            ++i;
        }

        return res;
    }
}
