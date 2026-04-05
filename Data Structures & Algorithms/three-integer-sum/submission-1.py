class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = set()
        numbers = dict() # number : list(index)

        for i in range(len(nums)):
            numbers[nums[i]] = numbers.get(nums[i], {i}) | {i}
        
        for i1 in range(len(nums)):
            for i2 in range(i1 + 1, len(nums)):
                n3 = -(nums[i1] + nums[i2]) 
                if n3 in numbers:
                    if len(numbers[n3] - {i1, i2}) >= 1: # Found needed 3rd number
                        threesome_tuple = tuple(sorted([nums[i1], nums[i2], n3]))
                        res.add(threesome_tuple)

        return [list(triplet) for triplet in res]
