/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // Initialize the matrix 
    let newMatrix = new Array(numRows).fill().map(() => []);
    let direction = 1; // 1 for down, -1 for up
    let row = 0;

   

    for (const char of s) {

        newMatrix[row].push(char);

        if (row ===0) {
            direction = 1;
        } else if (row === numRows -1) {
            direction = -1;
        }

        row += direction;
    }

    // Flatten the matrix and join into a single string
    return newMatrix.flat().join('');
    
};

// console.log()
convert("LEETCODEISHIRING", 2)