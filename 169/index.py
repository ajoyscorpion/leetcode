# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

# 1st method
from typing import List
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = {}
        majorityValue = len(nums)/2 

        for num in nums :
            count[num] = count.get(num,0) + 1

            if count[num]>majorityValue :
                return num

solution = Solution()
print(solution.majorityElement([3,2,3]))  
print(solution.majorityElement([2,2,1,1,1,2,2]))       



# Boyre Mooore Voting Algorithm
# 2nd method
from typing import List
class Solution:
    def majorityElement1(self, nums: List[int]) -> int:
        count = 0
        candidate = 0

        for num in nums:
            if count == 0:
                candidate = num
            count += (1 if candidate == num else -1)
        return candidate

solution = Solution()
print(solution.majorityElement1([3,2,3]))  
print(solution.majorityElement1([2,2,1,1,1,2,2])) 


