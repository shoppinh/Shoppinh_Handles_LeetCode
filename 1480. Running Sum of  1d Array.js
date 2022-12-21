/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function(nums) {
  const outputArr = [];
  for (let index = 0; index < nums.length; index++) {
    const value = nums.reduce((prev,curr,idx)=> {
      if (idx > index) {
        return prev
      }
      return prev+ curr;
    
  },0)
  outputArr.push(value)
  }
  return outputArr;
}

console.log("runningSum", runningSum([1,2,3,4]));