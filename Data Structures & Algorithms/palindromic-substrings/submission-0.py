class Solution:
    def countSubstrings(self, s: str) -> int:
        # Get all substrings where s[i] is the middle of the substring
        # for even length substrings set s[i:i+2] as the middle
        res = 0

        for i in range(len(s)):
            # Check odd length substrings
            l = r = i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                res += 1
                l -= 1
                r += 1

            # Check even length substrings
            l = i
            r = i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                res += 1
                l -= 1
                r += 1
        
        return res