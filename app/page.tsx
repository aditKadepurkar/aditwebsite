import Typewriter from "./Components/typewriter";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import Pfp from "./Components/pfp";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center overflow-hidden">
      <div className="animate-appear absolute inset-0 z-[5] flex items-center justify-center">
        <Pfp />
      </div>
      <div className="animate-fade-in relative z-10 translate-y-[24em] scale-[1] justify-center overflow-hidden rounded-full bg-neutral-800 p-10 ">
        <Typewriter
          text="Hi! I'm Adit!"
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
    </main>
  );
}
