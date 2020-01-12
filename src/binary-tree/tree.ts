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

  toArray(node: Node<T> = this.root): Node<T>[] {
    if (node == null) return []

    const array: Node<T>[] = []
    this.collect(node, array)

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

    if (this.exists(key)) {
      this.edit(key, value)
      return
    }

    if (this.root == null) {
      this.root = node
      return
    }

    let iterator: Node<T> = this.root
    let parent: Node<T>

    while (iterator != null) {
      parent = iterator
      iterator = key > iterator.key ? iterator.right : iterator.left
    }

    if (key > parent.key) parent.right = node
    else parent.left = node

    node.parent = parent
  }

  removeAt(key: string | number): void {
    if (key == null) throw new Error("Key can't be as a null value")

    let iterator: Node<T> = this.root
    let parent: Node<T> = this.root

    while (iterator != null && iterator.key != key) {
      parent = iterator
      iterator = key > iterator.key ? iterator.right : iterator.left
    }

    if (iterator == null) throw new Error('Key was not found')

    const savedValues = [
      ...this.toArray(iterator.left),
      ...this.toArray(iterator.right)
    ]

    const parentLeftKey = parent.left != null ? parent.left.key : null
    const parentRightKey = parent.right != null ? parent.right.key : null

    if (parentLeftKey == key) parent.left = null
    else if (parentRightKey == key) parent.right = null

    savedValues.forEach(node => this.add(node.key, node.value))
  }

  remove(node: Node<T>): void {
    throw new Error('Method not implemented.')
  }

  edit(key: number | string, value: T) {
    let iterator = this.root

    while (iterator != null && iterator.key != key) {
      iterator = key > iterator.key ? iterator.right : iterator.left
    }

    if (iterator != null) iterator.value = value
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

  exists(key: number | string): boolean {
    let iterator: Node<T> = this.root

    while (iterator != null && iterator.key != key) {
      iterator = key > iterator.key ? iterator.right : iterator.left
    }

    return iterator != null
  }

  find(node: Node<T>): string | number {
    throw new Error('Method not implemented.')
  }

  get(key: string | number): Node<T> {
    let iterator: Node<T> = this.root

    while (iterator != null && iterator.key != key) {
      iterator = key > iterator.key ? iterator.right : iterator.left
    }

    return iterator
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
