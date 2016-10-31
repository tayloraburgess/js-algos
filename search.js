function bubbleSort(input) {
    const returnArray = input.slice(0, input.length);
    let sorted = false;
    while (sorted === false) {
        sorted = true;
        for (let i = 1; i < returnArray.length; i++) {
            if (returnArray[i] < returnArray[i - 1]) {
                const temp = returnArray[i];
                returnArray[i] = returnArray[i - 1];
                returnArray[i - 1] = temp;
                sorted = false;
            }
        }
    } 
    return returnArray;
};

const testArray = [3, 9, 2, 64, 0, 78];
const sortedArray = bubbleSort(testArray);
console.log(testArray);
console.log(sortedArray);
