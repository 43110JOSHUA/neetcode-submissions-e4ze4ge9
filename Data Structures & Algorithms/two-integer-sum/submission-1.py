class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numbers = dict()

        for i in range(len(nums)):
            numbers[nums[i]] = i
        
        for i in range(len(nums)):
            a = nums[i]
            b = target - a
            if b in numbers and i != numbers[b]:
                return [i, numbers[b]]