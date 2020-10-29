export type Item = {
  id: string;
  name: string;
  score: string;
  url?: string;
  degree?: string;
};

export type Node = {
  slug: string;
  title: string;
  description: string;
  items: Item[];
};

export type Edge = {
  node: Node;
};
