#TC: O(N) SC: O(N)

class Solution:
    def isHappy(self, n: int) -> bool:
        nums = set()
        if n == 1:
            return True

        while n not in nums:
            nums.add(n)
            n = self.sumDigitSquare(n)

            if n == 1:
                return True

        return False

    def sumDigitSquare(self, num):
        output = 0

        while num:
            lastDigit = num % 10
            output += lastDigit ** 2
            num //= 10

        return output