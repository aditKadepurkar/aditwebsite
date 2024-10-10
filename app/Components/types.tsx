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
  comment_id: string;
  post_id: string;
  commenter: string;
  stars: number;
  comment_text: string;
  date: string;
};
