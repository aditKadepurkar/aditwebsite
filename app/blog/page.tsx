type post = {
  num: number;
  title: string;
  body: string;
};

const MAX_BODY_PEEK: number = 100;

// This will probably need to be moved to the pages folder(to be created)
// because nextjs doesn't like use having this here
export async function getData() {
  const res = await fetch("http://0.0.0.0:7000/posts");
  const data: post[] = JSON.parse(await res.json());
  return data;
}

function truncate(text: string) {
  const ret: string = text.substring(0, MAX_BODY_PEEK);
  return ret;
}

export default async function Home() {
  const posts = await getData();
  const len: number = posts.length;
  return (
    <div className="relative top-[12em]  mx-auto mt-8 flex max-w-screen-lg bg-white p-4">
      <div>
        <h2>Number of Posts: {len}</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.num}>
              <h1>{post.title}</h1>
              <p>{truncate(post.body)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
