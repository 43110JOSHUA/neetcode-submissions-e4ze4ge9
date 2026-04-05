class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length <= 1) {
            return 0;
        }
        let max_profit = 0;
        let p1 = 0;
        let p2 = 1;

        while (p1 < p2 && p2 < prices.length) {
            const new_profit = prices[p2] - prices[p1];
            max_profit = Math.max(max_profit, new_profit);
            // Check if there is a cheaper buy
            if (prices[p2] < prices[p1]) {
                p1 = p2;
                p2 = p1 + 1;
            }
            else {
                ++p2;
            }
        }
        return max_profit;
    }
}
