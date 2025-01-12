import CommentModal from "@/app/Components/comment";
import { Post, Comment } from "@Components/types";
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

require('dotenv').config();



// async function getData(num: number) {
//   // console.log(`${process.env.ENDPOINTPOSTS}/${num}`);
//   const res = await fetch(`http://0.0.0.0:7000/posts/${num}`);
//   const data: Post = JSON.parse(await res.json());
//   return data;
// }

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

  const month: string = months[Number(text.substring(5, 7)) - 1];

  return month + ` ${text.substring(8, text.length)},` + ` ${text.substring(0, 4)}`;
}


type Props = Promise<{
  params: {
    post: string
  }
}>

export default async function Page({
  params,
}: {
  params: { post: string };
}) {
  const { post } = params;
  const comments: Comment[] = await getComments(Number(post.substring(0, 1)));

  const filePath = path.join(process.cwd(), 'public/markdown', `${post.substring(1, post.length)}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  // console.log(content);
  // console.log(data);

  return (
    <div className="relative top-[12em] mx-auto mb-8 mt-8 flex max-w-screen-lg flex-col rounded-xl bg-stone-800 p-4 shadow-2xl shadow-gray-900">
      <div className="absolute top-4 z-[5] left-4">
        <Link href="/blog" className="z-10">
          <Image
            className="relative -z-10 scale-100 overflow-hidden rounded-2xl shadow-2xl shadow-gray-900 transition duration-100 ease-in-out hover:scale-105"
            src="/backbutton.png"
            alt="/backbutton.png"
            width={40}
            height={40}
            priority
          />
        </Link>
      </div>
      <div className="flex px-10 py-5">
        <div className="p-4 w-full">
          <h1 className="justify-left flex py-3 text-3xl font-bold text-slate-200">
            {data.title}
          </h1>
          <div className="prose prose-invert justify-left py-5 text-slate-200 w-full max-w-none">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-300 p-3 pb-10">
         <h1 className="p-5 text-xl font-bold"> Comments </h1>
         <CommentModal postId={Number(post.substring(0, 1))} />
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
      </div>
    </div>
  );
}
