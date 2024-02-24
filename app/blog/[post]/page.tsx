interface BlogPostProps {
  params: {
    post: string;
  };
}

type post = {
  num: number;
  title: string;
  body: string;
  date: string;
};

export async function getData(num: number) {
  const res = await fetch(`http://0.0.0.0:7000/posts/${num}`);
  const data: post = JSON.parse(await res.json());
  return data;
}

async function BlogPost({ params: { post } }) {
  const postData: post = await getData(Number(post.substring(0, 1)));
  return (
    <div className="relative top-[12em]  mx-auto mt-8 flex max-w-screen-lg rounded-xl bg-white p-4">
      <p>Hi!! </p>
    </div>
  );
}

export default BlogPost;
