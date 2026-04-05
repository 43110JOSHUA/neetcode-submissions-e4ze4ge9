class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = dict()

        for s in strs:
            letter_freq = [0] * 26

            for l in s:
                letter_freq[ord(l) - ord("a")] += 1

            res[tuple(letter_freq)] = res.get(tuple(letter_freq), []) + [s]
        
        
        return list(res.values())
