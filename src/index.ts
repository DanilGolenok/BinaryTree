import Tree from './binary-tree/tree'

const tree = new Tree<string>()

tree.add(51, 'node 51')
tree.add(46, 'node 46')
tree.add(58, 'node 58')
tree.add(49, 'node 49')
tree.add(61, 'node 61')
tree.add(70, 'node 70')
tree.add(80, 'node 80')
tree.add(13, 'node 13')
tree.add(24, 'node 24')
tree.add(64, 'node 64')

const root = tree.getRoot()
const array = tree.toArray()

array.forEach(node => console.log(`key -> ${node.key}`))
