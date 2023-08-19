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
        buy = 0
        maxProfit = 0

        for sell in range(1,len(prices)):
            if prices[buy] > prices[sell]:
                buy = sell
            
            else:
                profit = prices[sell] - prices[buy]
                maxProfit = max(maxProfit, profit)
            
        return maxProfit;