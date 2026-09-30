class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Get total product excluding zero
        product = 1
        zero = 0
        for i in nums:
            if i == 0:
                zero += 1
            else:
                product *= i
        
        # Create final list if there is 1 or less zeros
        res = []
        if zero <= 1: 
            for i in nums:
                if i == 0:
                    res.append(product)
                elif zero:
                    res.append(0)
                else:
                    res.append(product // i)
        # Entire result is zero if there is 2 or more zeros
        else:
            res = [0 for _ in range(len(nums))]

        return res