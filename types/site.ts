export type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  image: string;
};

export type BlogPost = {
  id: string;
  date: string;
  tags: string;
  title: string;
  excerpt: string;
};

export type VideoItem = {
  id: string;
  title: string;
};
