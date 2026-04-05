class Solution:
    def canJump(self, nums: List[int]) -> bool:
        dp = [True] + [False for x in range(len(nums) - 1)]

        for i in range(len(nums)):
            if dp[i]:
                for j in range(nums[i] + 1):
                    if i + j < len(nums):
                        dp[i + j] = True
        
        return dp[len(nums) - 1]