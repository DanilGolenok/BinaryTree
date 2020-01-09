import Node from './node'

export default interface TreeCollection<T> {
  toArray(): Node<T>[]

  add(key: number | string, value: T): void
  removeAt(key: number | string): void
  remove(node: Node<T>): void

  min(node: Node<T>): Node<T> | null
  max(node: Node<T>): Node<T> | null

  find(node: Node<T>): number | string | null
  get(key: number | string): Node<T>
  getRoot(): Node<T>

  next(node: Node<T>): Node<T> | null
  prev(node: Node<T>): Node<T> | null
}
