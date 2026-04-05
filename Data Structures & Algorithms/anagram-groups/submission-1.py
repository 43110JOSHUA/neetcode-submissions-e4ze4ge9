class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = dict()

        for w in strs:
            letters = [0] * 26
            for l in w:
                index = ord(l) - ord("a")
                letters[index] += 1
            
            res[tuple(letters)] = res.get(tuple(letters), []) + [w]
        
        return list(res.values())