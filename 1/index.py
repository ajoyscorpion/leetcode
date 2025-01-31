# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.



from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]


solution = Solution()
print(solution.twoSum([2, 7, 11, 15], 9))  
print(solution.twoSum([3, 2, 4], 6))       
print(solution.twoSum([3, 3], 6))          