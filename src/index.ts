import Tree from './binary-tree/tree'

const random = (min, max) => {
  return Math.floor(Math.random() * max + min)
}

const tree = new Tree<string>()

let array = []

for (let i = 0; i < 50000; ++i) {
  const key = random(0, 10000)
  tree.add(key, `node ${key}`)
  // array.push(key)
}

const root = tree.getRoot()

try {
  const found = 654

  console.time()

  const value = tree.get(found)

  console.timeEnd()
  console.log(value.value)
} catch (ex) {
  console.log(ex.message)
}
