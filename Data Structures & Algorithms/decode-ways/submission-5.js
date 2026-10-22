class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s[0] == "0") {
            return 0;
        }

        const n = s.length;
        const dp = new Array(n + 1).fill(0);
        dp[0] = 1;
        dp[1] = 1;

        for (let i = 2; i < n + 1; ++i) {
            if (s[i - 1] != "0") { // use it as 1 charatcer
                dp[i] += dp[i - 1];
            }
            if (s.substring(i - 2, i)[0] != "0" && Number(s.substring(i - 2, i)) <= 26) { // use it as part of previous character
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];
    }
}
