export type Item = {
  id: string;
  name: string;
  url?: string;
  degree?: string;
  provider?: string;
  year?: string;
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
