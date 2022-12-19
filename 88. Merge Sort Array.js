// Input nums1 = [1,2,3, , ,], m = 3, nums2 = [2,5,6], n = 3
// Output [1,2,2,3,5,6]

const nums1 = [1, 3, 4, 0, 0, 0];
const nums2 = [2, 5, 6];
const numsTotal = Array.prototype.concat(nums1, nums2);

const moveItemOfArray = (array, pos) => {
  for (let index = array.length - 1; index > pos; index--) {
    var temp = array[index - 1];
    array[index] = temp;
  }
};

const insertItem = (arr, item, size) => {
  for (let index = 0; index < size; index++) {
    if (item >= arr[index] && arr[index] !== 0) {
      continue;
    } else {
      moveItemOfArray(arr, index);
      arr[index] = item;
      break;
    }
  }
};

const merge = (n1, n2) => {
  for (let i = 0; i < n2.length; i++) {
    insertItem(n1, n2[i], n1.length);
  }
};

merge(nums1, nums2);

nums1.forEach((item) => console.log(item));
