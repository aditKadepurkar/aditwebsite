import { Post, Comment } from "@Components/types";

async function getData(num: number) {
  const res = await fetch(`http://0.0.0.0:7000/posts/${num }`);
  const data: Post = JSON.parse(await res.json());
  // console.log(data)
  return data;
}

async function getComments(num: number) {
  const res = await fetch(`http://0.0.0.0:7000/posts/${num}/comments`);
  const jsonString = await res.json();
  const jsonData: Comment[] = JSON.parse(jsonString);
  return jsonData;
}

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function format(text: string) {
  if (text === null) {
    return "October 10, 2024";
  }

  // console.log(text)
  const month: string = months[Number(text.substring(5, 7)) - 1];

  return month + ` ${text.substring(8, text.length)},` + ` ${text.substring(0, 4)}`;
}

interface Params {
  params: {
    post: string;
  };
}

export default async function Home({ params: { post } }: Params) {
  const comments: Comment[] = await getComments(Number(post.substring(0, 1)));
  const postData: Post = await getData(Number(post.substring(0, 1)));

  return (
    <div className="relative top-[12em]  mx-auto mb-8 mt-8 flex max-w-screen-lg flex-col rounded-xl bg-stone-800 p-4 shadow-2xl shadow-gray-900">
      <div className="flex px-10 py-5">
        <div className="p-4">
          <h1 className="justify-left flex py-3 text-3xl font-bold text-slate-200">
            {postData.title}
          </h1>
          <p className="py-5 text-slate-200"> {format(postData.date)} </p>
          <p className="justify-left py-5 text-lg text-slate-200">
            {postData.content}
          </p>
        </div>
      </div>
      <div className="rounded-2xl bg-slate-300 p-3 pb-10">
        <h1 className="p-5 text-xl font-bold"> Comments </h1>
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <div className="flex w-full  px-10 py-1">
                <div className="w-4/5 px-4">
                  <h1 className="text-lg font-semibold"> {comment.commenter} </h1>
                  <p className="text-base"> {comment.comment_text} </p>
                </div>
                <div className="left-2 w-1/5 p-4">
                  <p className="text-sm"> {format(comment.date)} </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* This is where the comments will want to be loaded */}
      </div>
    </div>
  );
}
