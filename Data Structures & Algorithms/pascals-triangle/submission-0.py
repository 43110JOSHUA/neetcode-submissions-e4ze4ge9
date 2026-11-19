class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # Setup
        dp = [[1] for _ in range(numRows)]
        for i in range(len(dp)):
            for _ in range(i):
                dp[i].append(1)
        
        # Edge case
        if numRows <= 2:
            return dp

        # dp
        for i in range(2, numRows):
            for j in range(1, len(dp[i]) - 1):
                a = dp[i - 1][j - 1]
                b = dp[i - 1][j]
                dp[i][j] = a + b

        return dp