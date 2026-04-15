class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
         // Sort by end time
        intervals.sort((a, b) => a[1] - b[1]);

        let kept = 1;
        let lastEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            // If this interval starts at or after the last kept interval's end, keep it
            if (intervals[i][0] >= lastEnd) {
                kept++;
                lastEnd = intervals[i][1];
            }
            // Otherwise, skip it (it overlaps) — we implicitly "remove" it
        }

        return intervals.length - kept;
    }
}
