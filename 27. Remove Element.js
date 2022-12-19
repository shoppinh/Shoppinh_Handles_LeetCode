// Requirements : Given an array of nums and a value 'val', remove all instances of that value and return the new length

// Input nums1 = [3, 2, 2, 3] val=[3]
// Output [2, 2 ]
function removeNumber(inputArr, value) {
	
	return inputArr.filter((item) => item !== value);
}


