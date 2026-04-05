class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Create hashmap
        cur_freq = dict()
        for i in nums:
            cur_freq[i] = cur_freq.get(i, 0) + 1

        # Get top k
        res = []
        for i in range(k):
            maximum = max(cur_freq, key=cur_freq.get)
            res.append(maximum)
            cur_freq[maximum] = 0

        return res