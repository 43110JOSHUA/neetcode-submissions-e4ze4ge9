class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0

        for c in coins:
            for a in range(c, amount + 1):
                remainder = a - c
                dp[a] = min(dp[a], 1 + dp[remainder])
        
        return dp[amount] if dp[amount] < amount + 1 else -1