const TreeNode = {
    name: '', 
    addChild: function(addNode) {
        this.children.push(addNode);
    },
    getChildren: function() {
        return this.children;
    },
    setName: function(newName) {
        this.name = newName;
    },
    getName: function() {
        return this.name;
    }
}

function NodeFactory(name = '', childrenArray = []) {
    const newNode = Object.assign({}, TreeNode);
    newNode.setName(name);
    newNode['children'] = [];
    childrenArray.forEach((child) => {
        newNode.addChild(child);
    });
    return newNode;
}

function dfs(node) {
    console.log(node.getName());
    node.getChildren().forEach((child) => {
        dfs(child);
    });
}

function bfs(node) {
    const queue = [];
    queue.push(node);
    while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.getName());
        currentNode.getChildren().forEach((child) => {
           queue.push(child); 
        });
    }
}
const eNode = NodeFactory('e');
const dNode = NodeFactory('d');
const cNode = NodeFactory('c', [dNode]);
const bNode = NodeFactory('b', [eNode]);
const aNode = NodeFactory('a', [bNode, cNode]);
console.log('DFS:');
dfs(aNode);
console.log('BFS:');
bfs(aNode);

export singlyLinkedList;
