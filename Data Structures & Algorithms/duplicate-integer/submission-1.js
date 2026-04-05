class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nums_set = new Set(nums);

        return nums_set.size != nums.length;
    }
}
