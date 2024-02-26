"use client";

import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Pfp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`absolute place-items-center `}>
      {
        <Image
          className="relative scale-100 cursor-default overflow-hidden rounded-full shadow-2xl shadow-gray-900 transition duration-1000 ease-in-out"
          src="/me3.png"
          alt="/me.png"
          width={500}
          height={500}
          priority
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={
            isHovered ? { transform: "scale(1.25)" } : { transform: "scale(1)" }
          }
        />
      }
    </div>
  );
};

const words = ["Hi! I'm Adit! Welcome to my website!"];

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const firstWord = words[0];

  useEffect(() => {
    let currentIndexInWord = currentText.length;

    if (currentIndexInWord === firstWord.length) {
      return;
    }
    if (currentIndexInWord === 0) {
      const timeoutId = setTimeout(() => {
        setCurrentText(firstWord.substring(0, currentIndexInWord + 1));
      }, 2000);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText(firstWord.substring(0, currentIndexInWord + 1));
      }, 90);
      return () => clearTimeout(timeoutId);
    }
  }, [currentText, firstWord]);

  return (
    <main className="flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        {Pfp()}
      </div>
      <div className="animate-fade-in relative z-10 translate-y-[24em] scale-[1] justify-center overflow-hidden rounded-full bg-neutral-800 p-7 ">
        <p
          id="typewriter"
          className="relative inset-0 z-10 flex items-center justify-center text-center text-4xl font-bold text-slate-400 backdrop-blur"
        >
          {currentText}
        </p>
      </div>
      <div className="absolute left-16 z-[5] flex-col items-center justify-between">
        <Link href={"https://github.com/aditKadepurkar"} className="z-10 m-10">
          <Image
            className=" relative scale-100 overflow-hidden  shadow-2xl shadow-slate-400 transition duration-1000 ease-in-out"
            src="/github.png"
            alt="/github.png"
            width={90}
            height={90}
            // priority
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/adit-kadepurkar-52ba46258"}
          className="z-10 m-10"
        >
          <Image
            className=" relative -z-10 scale-100 overflow-hidden rounded-2xl shadow-2xl shadow-gray-900 transition duration-1000 ease-in-out"
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
