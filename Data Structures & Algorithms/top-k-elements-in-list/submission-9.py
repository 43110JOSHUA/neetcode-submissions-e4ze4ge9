class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\
        # solution using bucket sort
        freq = dict()
        buckets = [[] for i in range(len(nums) + 1)]

        # set frequencies
        for i in nums:
            freq[i] = freq.get(i, 0) + 1

        # set buckets
        for i, j in freq.items():
            buckets[j].append(i)

        # get top k elements
        result = []
        for i in reversed(buckets):
            result += i
            if len(result) == k:
                return result
        
