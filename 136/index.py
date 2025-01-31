# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# 1st Method

from typing import List
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        count = {}

        for num in nums:
            count[num] = count.get(num,0) + 1

        for key in count:
            if count[key] == 1:
                return key

solution = Solution()
print(solution.singleNumber([2,2,1]))  
print(solution.singleNumber([4,1,2,1,2]))       
print(solution.singleNumber([1])) 


# 2nd Medthod


# class Solution:
#     def singleNumber(self, nums: List[int]) -> int:
#         return reduce(lambda x,y:x^y,nums)