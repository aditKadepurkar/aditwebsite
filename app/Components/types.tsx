export type Project = {
  number: string;
  title: string;
  authors: string[];
  description: string;
  date: string;
  src: string;
  github?: string;
  website?: string;
};

export type Post = {
  number: string;
  title: string;
  body: string;
  date: string;
};

export type Comment = {
  number: string;
  user: string;
  stars: number;
  body: string;
  date: string;
};
