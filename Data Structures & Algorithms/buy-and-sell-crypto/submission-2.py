class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i1 = 0
        i2 = 1
        max_profit = 0
        
        if len(prices) > 1:
            while i2 < len(prices):
                buy = prices[i1]
                sell = prices[i2]
                max_profit = max(max_profit, sell - buy)

                # figure out if we can buy cheaper
                buy_improvement = buy - prices[i2]

                if buy_improvement > 0:
                    i1 = i2
                    i2 += 1
                else:
                    i2 += 1

        return max_profit

