// Still working with javascript, don't know it still be false
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  nums.sort();
  console.log("🚀 ~ KthLargest ~ nums:", nums);

  this.nums = nums;
};

KthLargest.prototype.indexBinarySearch = function (array, number) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // If K is found
    if (array[mid] == number) return mid;
    else if (array[mid] < number) start = mid + 1;
    else end = mid - 1;
  }

  // Return insert position
  return end + 1;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const index = this.indexBinarySearch(this.nums, val);
  console.log("🚀 ~ index:", index);
  this.nums.splice(index, 0, val);
  console.log("🚀 ~ this.nums:", this.nums);

  return this.nums[this.nums.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const obj = new KthLargest(3, [4, 5, 8, 2]);
obj.add(3);
obj.add(5);
obj.add(10);
obj.add(9);
const param_2 = obj.add(4);
console.log("🚀 ~ param_1:", param_2);
