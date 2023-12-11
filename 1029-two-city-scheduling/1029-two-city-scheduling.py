class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        refund = []
        n = len(costs) // 2
        minCost = 0
        
        for a, b in costs:
            refund.append(b - a)
            minCost += a
            
        refund.sort()
        
        for i in range(n):
            minCost += refund[i]
            
        return minCost