// Input nums1 = [1,2,3, , ,], m = 3, nums2 = [2,5,6], n = 3
// Output [1,2,2,3,5,6]

const nums1 = [4, 5, 6, 0, 0, 0];
const nums2 = [1, 2, 3];

const merge = function (nums1, m, nums2, n) {
  let pointer1 = m + n - 1;
  let pointer2 = n - 1;
  let pointer3 = m - 1;

  while (pointer2 >= 0) {
    if (pointer3 >= 0 && nums1[pointer3] > nums2[pointer2]) {
      nums1[pointer1] = nums1[pointer3];
      pointer3--;
    } else {
      nums1[pointer1] = nums2[pointer2];
      pointer2--;
    }
    pointer1--;
  }
};

merge(nums1, nums1.length - nums2.length, nums2, nums2.length);

console.log("nums1", nums1);
