
function modifyArray(arr) {
    // Use filter to remove non-numeric values and negative numbers (including 0)
    const filteredArray = arr.filter((element) => 
        typeof element === 'number' && element > 0
);
  
    // Use map to double the positive elements
    const resultArray = filteredArray.map((element) =>
        element * 2
    );
     
    return resultArray;
  }
  
  // Test the function with the provided example
  const inputArray = [1, 2, -1, undefined, 0, 7];
  const modifiedArray = modifyArray(inputArray);
  console.log(modifiedArray); // Output: [2, 4, 14]
  