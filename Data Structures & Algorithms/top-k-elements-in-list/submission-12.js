class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) ?? 0) + 1);
        }

        const freq = [...Array(nums.length + 1)].map(() => []);
        for (const [num, amount] of count.entries()) {
            freq[amount].push(num);
        }
        freq.reverse(); // Descending order
        
        const res = [];
        for (const ls of freq) {
            for (const num of ls) {
                res.push(num);
                --k;
                if (k <= 0) {
                    return res;
                }
            }
        }
    
        return res;
    }
}
