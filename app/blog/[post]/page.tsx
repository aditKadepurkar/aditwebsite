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
  const res = await fetch(`http://0.0.0.0:7000/posts/${num - 1}`);
  const data: post = JSON.parse(await res.json());
  return data;
}

async function BlogPost({ params: { post } }) {
  const postData: post = await getData(Number(post.substring(0, 1)));
  return (
    <div className="relative top-[12em]  mx-auto mt-8 flex max-w-screen-lg rounded-xl bg-white p-4">
      <div className="flex px-10 py-5">
        <div className="p-4">
          <h1 className="justify-left flex text-3xl font-bold">
            {postData.title}
          </h1>
          <p className="justify-left whitespace-wrap overflow-ellipsis text-base">
            {postData.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
