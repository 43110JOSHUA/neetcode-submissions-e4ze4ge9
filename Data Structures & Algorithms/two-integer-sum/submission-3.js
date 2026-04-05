class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numbers = new Map();

        // Populate map
        for (const [index, num] of nums.entries()) {
            numbers.set(num, index);
        }
        
        // Find pair
        for (const [i1, num1] of nums.entries()) {
            const num2 = target - num1;
            if (numbers.has(num2) && numbers.get(num2) != i1) {
                return [i1, numbers.get(num2)];
            }
        }
    }
}
