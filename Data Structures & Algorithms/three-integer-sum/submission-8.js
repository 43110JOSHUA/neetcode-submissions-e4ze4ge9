class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums = nums.toSorted((a,b) => a - b);

        for (const [i, a] of nums.entries()) {
            if (i > 0 && a == nums[i - 1]) {
                continue;
            }

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = a + nums[l] + nums[r];
                if (sum < 0) {
                    ++l;
                }
                else if (sum > 0) {
                    --r;
                }
                else {
                    res.push([a, nums[l], nums[r]]);
                    ++l;
                    // Ensure we don't use the same first 2 numbers
                    while (l < r && nums[l] == nums[l - 1]) {
                        ++l;
                    }
                }
            }
        }
        return res;
    }
}
