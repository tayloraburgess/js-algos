function bubbleSort(input) {
    console.log(`Bubble Sort Size: ${input.length}`);
    const returnArray = input.slice(0, input.length);
    let sorted = false;
    let runTime = 0;
    while (sorted === false) {
        sorted = true;
        for (let i = 1; i < returnArray.length; i++) {
            if (returnArray[i] < returnArray[i - 1]) {
                const temp = returnArray[i];
                returnArray[i] = returnArray[i - 1];
                returnArray[i - 1] = temp;
                sorted = false;
            }
            runTime++;
        }
    } 
    console.log(`Bubble Sort Runtime: ${runTime}`);
    return returnArray;
};

function selectionSort(input) {
    console.log(`Selection Sort Size: ${input.length}`);
    const returnArray = [];
    const inputArray = input.slice(0, input.length);
    let runTime = 0;
    while (inputArray.length > 0) {
        let lowest = 0;
        for (let i = 1; i < inputArray.length; i++) {
            if (inputArray[i] < inputArray[lowest]) {
                lowest = i;
            }
            runTime++;
        }
        returnArray.push(inputArray[lowest]);
        inputArray.splice(lowest, 1); 
    }
    console.log(`Selection Sort Runtime: ${runTime}`);
    return returnArray;
}

console.log('\n');
const testArray = [5, 4, 3, 2, 1];
const bubble = bubbleSort(testArray);
const selection = selectionSort(testArray);
console.log('\n')
console.log(testArray);
console.log('\n');
console.log(bubble);
console.log(selection);
console.log('\n');
