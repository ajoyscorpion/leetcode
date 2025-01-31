// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


// 1st Method

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let count = {}

    for (let num of nums){
        count[num] = (count[num] || 0) + 1
    }
    
    for (let key in count){
        if( count[key] === 1){
            return Number(key);
        }
    } 
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));



// 2nd Method

/**
//  * @param {number[]} nums
//  * @return {number}
 */


//  var singleNumber = function(nums) {
//     return nums.reduce((a,b)=>a^b)  
// };