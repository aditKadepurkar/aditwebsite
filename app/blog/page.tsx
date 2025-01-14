import Link from "next/link";
import Dropdown from "@Components/dropdown";
import { Post } from "@Components/types";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const MAX_BODY_PEEK: number = 500;


// async function getData(sort: string = 'Recent'): Promise<Post[]> {
//   try {
//     const res = await fetch(`http://0.0.0.0:7000/posts?sort=${sort}`);
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     const data: Post[] = JSON.parse(await res.json());

//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// }

function getData() {
  // just a list of markdown files(posts)
  return ["HelloWorld", "Canadarm", "SpeechHacks"].reverse() // "Delphi", "SpeechHacks", "Canadarm", "PersonalWebsite"];
}

// async function getData() {
//   //use axios
//   const res = await fetch("http://0.0.0.0:7000/posts");
//   const data: Post[] = JSON.parse(await res.json());
//   return data;
// }

function truncate(text: string, length: number = MAX_BODY_PEEK) {
  var ret = text.substring(0, length);

  ret = ret.replace(/[#*`_~]/g, '');
  ret = ret.trim();

  return ret;

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

function formatTitle(title: string, num: string) {
  const fir: string = num + " " + title;
  const ret: string = fir.replaceAll(" ", "-").replaceAll(".", "");
  return ret;
}

export default function Home() {
  const posts = getData();

  const len: number = posts.length;

  return (
    <div className="relative top-[12em]  mx-auto mt-0 md:mt-8 flex max-w-screen-lg rounded-xl bg-stone-800 p-2 md:p-4 shadow-2xl shadow-gray-900 overflow-x-hidden">
      <div className="">
        <div className="flex px-5 py-3">
          <h2 className="left-0 md:left-2 flex text-slate-200 text-base md:text-lg">Number of Posts: {len}</h2>
          <div className="absolute right-0 md:right-12 p-3 top-2">
            
            
            <Dropdown />
            {/* I want to update this at some point, might work off of how wings handles fieldselectmodal */}
          </div>
        </div>
        <ul>
          {posts.map((post, index) => {
            const filePath = path.join(process.cwd(), "public/markdown", `${post}.md`);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { content, data } = matter(fileContents);
            return (
              <li key={index}>
                <div className="flex px-10 py-5">
                  <div className="w-full md:w-4/5 p-4">
                    <h1 className="justify-left font-bold-100 flex text-3xl text-blue-400">
                      <Link href={`/blog/${index}${(post)}`}>
                        <span className="font-bold">{data.title}</span>
                      </Link>
                    </h1>
                    <p className="md:justify-left whitespace-wrap overflow-ellipsis text-base text-slate-200">
                      {truncate(content, 300)}...
                    </p>
                  </div>
                    <div className="hidden w-0 md:w-1/5 p-4 md:block">
                    <p className="text-slate-200"> {format(data.date.toISOString().substring(0, 10))} </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
