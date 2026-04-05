class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = dict()
        freq = [[] for i in range(len(nums) + 1)]
        # Populate hashmap
        for n in nums:
            count[n] = count.get(n, 0) + 1

        # Index maps to a list of nums with that number of occurances
        for i, j in count.items():
            freq[j].append(i)

        # Get top k
        res = []
        for i in reversed(range(len(freq))):
            res += freq[i]
            if len(res) == k:
                return res