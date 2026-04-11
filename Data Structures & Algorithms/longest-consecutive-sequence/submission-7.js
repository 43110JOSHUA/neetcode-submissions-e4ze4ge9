class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // O(n) time, O(n) space
        const set = new Set();
        for (const n of nums) {
            set.add(n);
        }

        let max = 0;
        for (let n of set) {
            // Find start of sequence
            if (set.has(n - 1)) {
                continue;
            }

            // Found. Check length
            let cur_length = 1;
            while (set.has(n + 1)) {
                ++cur_length;
                ++n;
            }
            max = Math.max(max, cur_length);
        }

        return max;
    }
}
