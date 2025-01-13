import Typewriter from "@Components/typewriter";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import Pfp from "@Components/pfp";
import { Project } from "@Components/types";

const MAX_BODY_PEEK = 100;

function truncate(text: string) {
  const ret: string = text.substring(0, MAX_BODY_PEEK);
  return ret;
}

// async function getData() {
//   const res = await fetch("http://0.0.0.0:7000/projects/featured");
//   const data: Project = JSON.parse(await res.json());
//   return data;
// }

export default async function Home() {
  // const project: Project = await getData();

  return (
    <main className="flex h-screen items-center justify-center overflow-scroll">
      <div className="lg:animate-appear absolute z-[5] flex items-center scale-50 md:scale-75 lg:scale-100 inset-0 md:justify-center">
        <Pfp />
      </div>

      {/* links */}
      <div className="w-full h-screen flex items-center md:mx-10">
        {/* pc */}
        <div className="hidden md:flex animate-fade-left bottom-0 flex-row md:flex-col z-[5] md:left-5 space-x-4 md:space-x-0 md:space-y-4">
          <Link href={"https://github.com/aditKadepurkar"} className="z-10">
            <Image
              className="relative scale-100 overflow-hidden shadow-2xl shadow-slate-400 transition duration-100 ease-in-out hover:scale-105"
              src="/github.png"
              alt="/github.png"
              width={90}
              height={90}
              priority
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/adit-kadepurkar-52ba46258"} className="z-10">
            <Image
              className="relative scale-100 overflow-hidden rounded-2xl shadow-2xl shadow-gray-900 transition duration-100 ease-in-out hover:scale-105"
              src="/linkedin.png"
              alt="/linkedin.png"
              width={90}
              height={90}
              priority
            />
          </Link>
        </div>

        {/* mobile */}
        <div className="md:hidden absolute animate-fade-left bottom-10 flex flex-row justify-center w-full z-[5] space-x-4">
          <Link href={"https://github.com/aditKadepurkar"} className="z-10">
            <Image
              className="relative scale-100 overflow-hidden shadow-2xl shadow-slate-400 transition duration-100 ease-in-out hover:scale-105"
              src="/github.png"
              alt="/github.png"
              width={90}
              height={90}
              priority
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/adit-kadepurkar-52ba46258"} className="z-10">
            <Image
              className="relative scale-100 overflow-hidden rounded-2xl shadow-2xl shadow-gray-900 transition duration-100 ease-in-out hover:scale-105"
              src="/linkedin.png"
              alt="/linkedin.png"
              width={90}
              height={90}
              priority
            />
          </Link>
        </div>

      </div>

      <div className="absolute hidden md:block z-10 scale-[1] bottom-10 justify-center rounded-full bg-neutral-800 p-10 ">
        <Typewriter
          text="Hey! Take a look around!"
          text2=" "
          text3=""
        />
      </div>

    </main>
  );
}
