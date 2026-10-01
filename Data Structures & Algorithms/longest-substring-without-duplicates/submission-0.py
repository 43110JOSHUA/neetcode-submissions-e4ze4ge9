class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 1:
            return 0
        
        start = 0
        end = 1
        cur_max = 1

        while (end < len(s)):
            if (s[end] in s[start:end]):
                start +=1
            else:
                end += 1
                cur_max = max(cur_max, len(s[start:end]))

        return cur_max
