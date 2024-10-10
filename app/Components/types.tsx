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
  post_id: string;
  title: string;
  content: string;
  date: string;
};

export type Comment = {
  number: string;
  user: string;
  stars: number;
  body: string;
  date: string;
};
