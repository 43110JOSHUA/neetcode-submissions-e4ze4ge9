class Solution:
    def canJump(self, nums: List[int]) -> bool:
        dp = [True] + [False for x in range(len(nums) - 1)]

        print(dp)
        for i in range(len(nums)):
            if dp[i]:
                n = nums[i]
                for j in range(n + 1):
                    if i + j < len(nums):
                        dp[i + j] = True
        
        return dp[len(nums) - 1]