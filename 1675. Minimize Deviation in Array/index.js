
// MaxHeap (faster)
function swap(nums, x, y) {
  var tmp = nums[x];
  nums[x] = nums[y];
  nums[y] = tmp;
}

function maxHeapSort(nums, n, parent) {
  var left = parent * 2 + 1;
  while (left < n) {
      var maxChild = left;
      var right = left + 1;
      if (right < n && nums[right] > nums[left]) {
          maxChild = right;
      }
      if (nums[maxChild] <= nums[parent]) {
          return;
      }
      swap(nums, parent, maxChild);
      parent = maxChild;
      left = parent * 2 + 1;
  }
}


/**
* @param {number[]} nums
* @return {number}
*/
var minimumDeviation = function(nums) {
  var n = nums.length;
  if (n < 2) return 0;
  nums.forEach((v, i) => (v % 2 === 1) && (nums[i] *= 2));
  for (var i = (n - 1) >> 1; i >= 0; i--) {
      maxHeapSort(nums, n, i);
  }
  var min = Math.min(...nums);
  var max = nums[0];
  var ans = max - min;
  while (max % 2 === 0) {
      max /= 2;
      min = Math.min(max, min);
      nums[0] = max;
      maxHeapSort(nums, n, 0);
      max = nums[0];
      ans = Math.min(ans, max - min);
  }
  return ans;
};


// MaxPriorityQueue (slower)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
  // https://github.com/datastructures-js/priority-queue
  const mpq = new MaxPriorityQueue();
  
  // Convert all the numbers to even and enqueue them
  nums.forEach((num) => {
    if (num % 2 !== 0) {
      const value = num * 2;
      
      mpq.enqueue(value, value);
    } else {
      mpq.enqueue(num, num);
    }
  });

  // Get difference between max and min values
  let deviation = mpq.front().element - mpq.back().element;
  
  // Loop until we have any max even number left in the queue
  while(mpq.front().element % 2 === 0) {
    // Get max even value
    const { element } = mpq.dequeue();
	
	// Convert it to odd number and enqueue again
    mpq.enqueue(element/2, element/2);
    
	// Get minimum between previous deviation and after above conversion
    deviation = Math.min(deviation, mpq.front().element - mpq.back().element);
  }
  
  return deviation;
};
console.log("🚀 ~ file: index.js:6 ~ minimumDeviation ~ minimumDeviation:", minimumDeviation([1,2,3,4]))
