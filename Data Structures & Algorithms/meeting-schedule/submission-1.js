/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);

        for (let i = 0; i < intervals.length - 1; ++i) {
            const m1 = intervals[i].end;
            const m2 = intervals[i + 1].start;
            if (m2 < m1) {
                return false;
            }
        }

        return true;
    }
}
