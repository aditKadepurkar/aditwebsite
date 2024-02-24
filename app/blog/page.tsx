import Dropdown from "../Components/dropdown";

type post = {
  num: number;
  title: string;
  body: string;
  date: string;
};

const MAX_BODY_PEEK: number = 500;

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
    <div className="relative top-[12em]  mx-auto mt-8 flex max-w-screen-lg rounded-xl bg-white p-4">
      <div className="">
        <div className="flex px-5 py-3">
          <h2 className="left-2 flex">Number of Posts: {len}</h2>
          <div className="absolute right-12 rounded-full bg-slate-200 p-3">
            <Dropdown />
          </div>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.num}>
              <div className="flex px-10 py-5">
                <div className="w-4/5 p-4">
                  <h1 className="justify-left flex text-3xl font-bold">
                    {post.title}
                  </h1>
                  <p className="justify-left whitespace-wrap overflow-ellipsis text-base">
                    {truncate(post.body)}...
                  </p>
                </div>
                <div className="w-1/5 p-4">
                  <p> {post.title} </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
