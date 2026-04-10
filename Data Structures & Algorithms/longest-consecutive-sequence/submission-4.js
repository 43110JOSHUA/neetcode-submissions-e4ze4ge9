class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b) => a - b);
        const dp = new Array(nums.length + 1).fill(0); // dp[i] = longest seq ending at nums[i]

        for (const [i, n] of nums.entries()) {
            let max = 0;

            // dp[i] = dp[i2] + 1 provided nums[i] = nums[i2] + 1
            for (let i2 = 0; i2 < nums.length; ++i2) {
                if (n == nums[i2] + 1) {
                    max = dp[i2];
                }
            }
            dp[i] = max + 1;
        }

        return Math.max(...dp);
    }
}
