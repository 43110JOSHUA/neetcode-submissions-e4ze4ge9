class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nums_set = new Set();
        
        for (let i = 0; i < nums.length; ++i) {
            if (nums_set.has(nums[i])) {
                return true;
            }
            nums_set.add(nums[i]);
        }
        return false;
    }
}
