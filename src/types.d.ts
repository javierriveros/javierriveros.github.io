export interface Item {
  id: string
  name: string
  score: string
  url?: string
  degree?: string
}

export interface Node {
  slug: string
  title: string
  description: string
  items: Item[]
}

export interface Edge {
  node: Node
}
