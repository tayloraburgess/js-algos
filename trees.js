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

const cNode = NodeFactory('c');
const bNode = NodeFactory('b');
const aNode = NodeFactory('a', [cNode, bNode]);
console.log('DFS:');
dfs(aNode);
console.log('BFS:');
