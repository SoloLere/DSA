class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        import heapq
        refund = []
        heapq.heapify(refund)
        n = len(costs) // 2
        minCost = 0
        
        for a, b in costs:
            heapq.heappush(refund, b - a)
            minCost += a
            
        
        for i in range(n):
            minCost += heapq.heappop(refund)
            
        return minCost