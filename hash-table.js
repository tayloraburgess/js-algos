import { singlyLinkedList } from './linked-list.js';

function hash(inputString) {
    return inputString.split('')
    .map((char) => {
        return char.charCodeAt(0);
    })
    .reduce((prev, next) => {
       return prev + next; 
    })
}

const HashTable = {
    addValue: function(value) {
        const key = hash(value);
        const index = key % 50;
        if (this.buckets[index] === undefined) {
            this.buckets[index] = Object.assign({}, singlyLinkedList);
        }
        this.buckets[index].appendNode({
            key: key,
            value: value
        });
        return key;
    },
    getValue: function(key) {
        const index = key % 50;
        if (this.buckets[index]) {
            let currentNode = this.buckets[index].head;
            while (currentNode !== undefined) {
                const data = currentNode.getData();
                if (data.key === key) {
                    return data.value;
                }
                currentNode = currentNode.getNext();
            }
        }
        return undefined;
    }
}

function HashTableFactory() {
    const newHashTable = Object.assign({}, HashTable);
    newHashTable['buckets'] = [];
    return newHashTable;
}

const test = HashTableFactory();
const key1 = test.addValue('something');
const key2 = test.addValue('another');
const key3 = test.addValue('another');
console.log(test.getValue(key1));
console.log(test.getValue(key2));
