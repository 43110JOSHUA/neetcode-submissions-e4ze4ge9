class Solution:
    def numDecodings(self, s: str) -> int:
        if s[0] == "0":
            return 0

        n = len(s)
        # dp[i] = number of ways to decode s[0:i]
        dp = [0] * (n + 1)
        dp[0] = 1  # empty string
        dp[1] = 1  # first char is non-zero (checked above)

        for i in range(2, n + 1):
            # single digit: s[i-1]
            if s[i - 1] != "0":
                dp[i] += dp[i - 1]
            # two digits: s[i-2:i]
            if 10 <= int(s[i - 2:i]) <= 26:
                dp[i] += dp[i - 2]

        return dp[n]