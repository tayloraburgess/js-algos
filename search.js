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

function insertionSort(input) {
    console.log(`Insertion Sort Size: ${input.length}`);
    const returnArray = input.slice(0, input.length);
    let runTime = 0;
    for (let i = 1; i < returnArray.length; i++) {
        let j = i;
        while (j > 0 && returnArray[j] < returnArray[j - 1]) {
            const temp = returnArray[j - 1];
            returnArray[j - 1] = returnArray[j];
            returnArray[j] = temp;
            runTime++;
            j--;
        }
    } 
    console.log(`Insertion Sort Runtime: ${runTime}`);
    return returnArray;
}

function mergeSort(input) {
    function mergeArray(left, right) {
        const returnArray = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                returnArray.push(left.shift());
            } else {
                returnArray.push(right.shift());
            }
        }
        while (left.length > 0) {
            returnArray.push(left.shift());
        }
        while (right.length > 0) {
            returnArray.push(right.shift());
        }
        return returnArray;
    }

    if (input.length <= 1) {
        return input;
    }
    const left = input.slice(0, input.length / 2); 
    const right = input.slice(input.length / 2, input.length);
    const leftMerged = mergeSort(left);
    const rightMerged = mergeSort(right);
    return mergeArray(leftMerged, rightMerged);
}

console.log('\n');
const testArray = [5, 4, 3, 2, 1];
const bubble = bubbleSort(testArray);
const selection = selectionSort(testArray);
const insertion = insertionSort(testArray);
const merge = mergeSort(testArray);
console.log('\n')
console.log(testArray);
console.log('\n');
console.log(bubble);
console.log(selection);
console.log(insertion);
console.log(merge)
