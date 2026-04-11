class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // O(nlogn) time, O(n) space
        nums.sort((a,b) => a - b);

        let max = 0;
        let cur_seq = new Array();

        for (const [i, n2] of nums.entries()) {
            // Number is 1 greater than prev
            if (i == 0 || n2 == nums[i - 1] + 1) {
                cur_seq.push(n2);
            }
            // Number is same as prev
            else if (n2 == nums[i - 1]) {
                continue;
            }
            // Number breaks sequence
            else {
                cur_seq = [n2];
            }

            // update max
            if (cur_seq.length > max) {
                max = cur_seq.length;
            }
        }

        return max;
    }
}
