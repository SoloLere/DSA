"""
Really nice solution,

convert sum(nums[i] ~ nums[j]) to presum[j] - presum[i-1]. maybe we should think of presum for these subarray problems
maintain a monotonic increasing queue, https://medium.com/algorithms-and-leetcode/monotonic-queue-explained-with-leetcode-problems-7db7c530c1d6
we can keep checking if the front element of the queue satisfying the requirement, if it is, we can pop front, because there won't be any better solution in the future compared to current - front, len of future - front is always larger
then before put the current presum into the queue, keep popping out the element great than current presum, because there won't be any better solution in the future with the bigger presum, we could always using the future - current, len is smaller than future - back
Thanks for sharing the thinking process!!
"""
#TC: O(N) SC: O(N)

class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        res, presum = float("inf"), 0
        dq = collections.deque()
        # add intitial presum to 0
        dq.append([0, 0])

        for i, val in enumerate(nums):
            presum += val

            # is there a valid window with sum >= k
            while dq and presum - dq[0][1] >= k:
                res = min(res, i - dq[0][0] + 1)
                dq.popleft()  # shrink window

            # find the best index that maximizes future - presum (curPresum)
            # hence delete presums greater then my curPresum
            while dq and presum <= dq[-1][1]:
                dq.pop()

            # add presum and it's index to dq
            dq.append([i + 1, presum])

        return res if res < float("inf") else -1
