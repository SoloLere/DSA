# Brute force TC: O(N^2) SC: O(1)

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxP = 0
        for i in range(len(prices)):
            for j in range(i + 1, len(prices)):
                if prices[j] > prices[i]:
                    maxP = max(maxP, prices[j] - prices[i])
        
        return maxP

# Two Pointer TC: O(N) SC: O(1)
        
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit = 0
        buy = 0

        for sell in range(1,len(prices)):
            # when do i sell
            # only when buy price is lesser than sell price
            # I buy whenever I encounter a price cheaper than my previous buying price
            # buy low sell high
            # [8, 3, 6, 5, 1, 7]

            if prices[buy] > prices[sell]:
                buy = sell

            else: 
                profit = prices[sell] - prices[buy]
                maxProfit = max(profit, maxProfit)

        return maxProfit