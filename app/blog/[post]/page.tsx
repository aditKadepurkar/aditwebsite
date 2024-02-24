interface BlogPostProps {
  params: {
    post: string;
  };
}
const BlogPost: React.FC<BlogPostProps> = ({ params: { post } }) => {
  return (
    <div className="relative top-[12em]  mx-auto mt-8 flex max-w-screen-lg rounded-xl bg-white p-4">
      <p>Hi!! </p>
    </div>
  );
};

export default BlogPost;
