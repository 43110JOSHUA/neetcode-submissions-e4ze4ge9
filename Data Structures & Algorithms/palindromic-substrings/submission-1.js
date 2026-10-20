class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        // DP solution
        
        let res = 0;
        const n = s.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));
        // dp[i][j] = true if substring s[i..j] is a palindrome

        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    res++;
                }
            }
        }

        return res;
    }
}