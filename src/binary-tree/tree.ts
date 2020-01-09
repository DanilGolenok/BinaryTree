import Node from './interfaces/node'
import TreeCollection from './interfaces/tree-collection'

export default class Tree<T> implements TreeCollection<T> {
  private root: Node<T>

  constructor(nodes?: Node<T>[]) {
    this.root = null

    nodes?.forEach(node => this.add(node.key, node.value))
  }

  private collect(root: Node<T>, array: Node<T>[]) {
    if (root.left != null) this.collect(root.left, array)

    array.push(root)

    if (root.right != null) this.collect(root.right, array)
  }

  toArray(): Node<T>[] {
    const array: Node<T>[] = []
    this.collect(this.root, array)

    return array
  }

  display(root: Node<T>) {
    if (root.left != null) this.display(root.left)

    console.log(`key -> ${root.key}, value -> ${root.value}`)

    if (root.right != null) this.display(root.right)
  }

  add(key: string | number, value: T): void {
    const node: Node<T> = {
      key,
      value,
      parent: null,
      left: null,
      right: null
    }

    if (this.root == null) {
      this.root = node
      return
    }

    // use while
    let iterator: Node<T> = this.root
    let parent: Node<T>

    while (iterator != null) {
      parent = iterator

      if (key > iterator.key) iterator = iterator.right
      else iterator = iterator.left
    }

    if (key > parent.key) parent.right = node
    else parent.left = node

    node.parent = parent
  }

  removeAt(key: string | number): void {
    throw new Error('Method not implemented.')
  }

  remove(node: Node<T>): void {
    throw new Error('Method not implemented.')
  }

  min(node: Node<T>): Node<T> {
    if (node == null) throw new Error("Node can't be as a null value")

    if (node.left != null) return this.min(node.left)
    else return node
  }

  max(node: Node<T>): Node<T> {
    if (node == null) throw new Error("Node can't be as a null value")

    if (node.right != null) return this.max(node.right)
    else return node
  }

  find(node: Node<T>): string | number {
    throw new Error('Method not implemented.')
  }

  get(key: string | number): Node<T> {
    throw new Error('Method not implemented.')
  }

  getRoot(): Node<T> {
    return this.root
  }

  next(node: Node<T>): Node<T> {
    throw new Error('Method not implemented.')
  }

  prev(node: Node<T>): Node<T> {
    throw new Error('Method not implemented.')
  }
}
