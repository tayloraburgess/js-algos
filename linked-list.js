export const singlyLinkedList = {
    _node: {
        _data: undefined,
        _next: undefined,
        setData: function(data = {}) {
            this._data = data;
        },
        setNext: function(node = undefined) {
            this._next = node;
        },
        getData: function() {
            return this._data;
        },
        getNext: function() {
            return this._next;
        }
    },
    _checkEqual: function(data1, data2) {
        if (JSON.stringify(data1) === JSON.stringify(data2)) {
            return true;
        }
        return false;
    },
    head: undefined,
    appendNode: function (data) {
        if (this.head === undefined) {
            const newNode = Object.assign({}, this._node);
            newNode.setData(data);
            this.head = newNode;
        } else {
            let node = this.head;
            while (node.getNext() !== undefined) {
                node = node.getNext();
            }
            const newNode = Object.assign({}, this._node);
            newNode.setData(data);
            node.setNext(newNode); 
        }
    },
    deleteNode: function (data) {
        if (this._checkEqual(this.head.getData(), data)) {
            this.head = this.head.getNext();
        } else {
            let node = this.head;
            while (node.getNext() !== undefined) {
                const next = node.getNext();
                if (this._checkEqual(next.getData(), data)) {
                    node.setNext(next.getNext());      
                    break;
                }
                node = node.getNext();
            }
        }
    },
    findNode: function(data) {
        let node = this.head;
        while (node.getNext() !== undefined) {
            const next = node.getNext(); 
            if (this._checkEqual(next.getData(), data)) {
                return next.getData();
            }  
            node = node.getNext();
        }
    },    
    iterateList: function(callback = (node) => {}) {
        let node = this.head;
        callback(node);
        while (node.getNext() !== undefined) {
            node = node.getNext();
            callback(node);
        }
    }
};

if (require.main === module) {
    const testList = Object.assign({}, singlyLinkedList);
    testList.appendNode({ data: 1});
    testList.appendNode({ data: 2});
    testList.appendNode({ data: 3});
    testList.appendNode({ data: 4});
    testList.iterateList((node) => {
        console.log(node.getData());
    });
    console.log('---');
    const nodeData = testList.findNode({ data: 2});
    console.log(nodeData);
    console.log('---');
    testList.deleteNode({ data: 1});
    testList.iterateList((node) => {
        console.log(node.getData());
    });
}
