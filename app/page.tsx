import Typewriter from "./Components/typewriter";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import Pfp from "./Components/pfp";
import ProjectLoader from "./Components/project";

type Project = {
  number: string;
  title: string;
  authors: string[];
  description: string;
  date: string;
  src: string;
};

const MAX_BODY_PEEK = 100;

function truncate(text: string) {
  const ret: string = text.substring(0, MAX_BODY_PEEK);
  return ret;
}

async function getData() {
  const res = await fetch("http://0.0.0.0:7000/projects/featured");
  const data: Project = JSON.parse(await res.json());
  return data;
}


export default async function Home() {
  const project: Project= await getData()

  return (
    <main className="flex h-screen items-center justify-center overflow-hidden">
      <div className="animate-appear absolute inset-0 z-[5] flex items-center justify-center">
        <Pfp />
      </div>
      <div className="animate-fade-in relative z-10 translate-y-[24em] scale-[1] justify-center overflow-hidden rounded-full bg-neutral-800 p-10 ">
        <Typewriter
          text="Hi, I'm Adit!"
          text2=" Welcome to my website!"
          text3=" Take a look around!"
        />
      </div>
      <div className="animate-fade-left absolute left-16 z-[5] flex-col items-center justify-between">
        <Link href={"https://github.com/aditKadepurkar"} className="z-10 m-10">
          <Image
            className="relative scale-100 overflow-hidden shadow-2xl  shadow-slate-400 transition duration-100 ease-in-out hover:scale-105"
            src="/github.png"
            alt="/github.png"
            width={90}
            height={90}
            priority
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/adit-kadepurkar-52ba46258"}
          className="z-10 m-10"
        >
          <Image
            className="relative -z-10 scale-100 overflow-hidden rounded-2xl shadow-2xl shadow-gray-900 transition duration-100 ease-in-out hover:scale-105"
            src="/linkedin.png"
            alt="/linkedin.png"
            width={90}
            height={90}
            priority
          />
        </Link>
      </div>
      <div className="absolute right-16 z-50 items-center w-80 animate-fade-right">
        <div className="bg-neutral-800 rounded-2xl p-5 scale-100 transition duration-100 ease-in-out hover:scale-105">
          <div className="flex py-3">
            <h1 className="w-3/5 text-zinc-200 text-2xl font-bold m-auto px-2 text-center">{project.title}</h1>
            <Image
              className="w-2/5 relative z-10 scale-100 overflow-hidden rounded-2xl shadow-2xl shadow-gray-900"
              src= {`${project.src}`}
              alt="/linkedin.png"
              width={70}
              height={70}
            />
          </div>
          <p className="text-zinc-400 text-ellipsis">{truncate(project.description)}</p>
        </div>
      </div>
    </main>
  );
}
