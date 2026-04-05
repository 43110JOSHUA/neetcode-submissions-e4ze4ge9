class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Gather frequencies
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1);
        }

        // Order frequencies
        const ordered_freq = [...Array(nums.length + 1)].map(() => []);
        for (const [num, count] of freq.entries()) {
            ordered_freq[count].push(num);
        }

        // Get k most frequent
        const res = [];
        for (const ls of ordered_freq.reverse()) {
            for (const num of ls) {
                res.push(num);
                --k;
                if (k <= 0) {
                    return res;
                }
            }
        }
    }
}
