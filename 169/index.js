// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let count = {}
    let majorityNumber = Math.floor(nums.length/2)

    for(let x of nums){
        count[x] = (count[x] || 0) + 1 

        if(count[x]>majorityNumber){
            return x
        }
    }
};

console.log(majorityElement([3,2,3]))  
console.log(majorityElement1([2,2,1,1,1,2,2])) 