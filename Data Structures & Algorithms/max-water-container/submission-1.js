class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let p1 = 0;
        let p2 = heights.length - 1;

        while (p1 < p2) {
            const cur_area = Math.min(heights[p1], heights[p2]) * (p2 - p1);
            max = Math.max(cur_area, max);

            if (heights[p1] > heights[p2]) {
                --p2;
            }
            else {
                ++p1;
            }
        }

        return max;
    }
}
