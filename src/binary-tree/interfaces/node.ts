export default interface Node<T> {
  key: number | string
  value: T
  parent: Node<T>
  left: Node<T>
  right: Node<T>
}
