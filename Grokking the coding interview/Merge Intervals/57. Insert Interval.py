# TC: O(N) SC: O(N)

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        i, start, end = 0, 0, 1
        output = []

        while i < len(intervals) and intervals[i][end] < newInterval[start]:
            output.append(intervals[i])
            i += 1
        
        while i < len(intervals) and intervals[i][start] <= newInterval[end]:
            newInterval[start] = min(newInterval[start], intervals[i][start])
            newInterval[end] = max(newInterval[end], intervals[i][end])
            i += 1
        
        output.append(newInterval)

        while i < len(intervals):
            output.append(intervals[i])
            i += 1

        return output