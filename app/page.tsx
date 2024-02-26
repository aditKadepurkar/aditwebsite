"use client";

import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";

const Pfp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`absolute place-items-center `}>
      {
        <Image
          className="hover:animate-pfp relative scale-100 cursor-default overflow-hidden rounded-full transition duration-1000 ease-in-out dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
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

const words = [
  "Hi! I'm Adit! Welcome to my website!",
  "This is a typewriter effect.",
];

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
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [currentText, firstWord]);

  return (
    <main className="flex h-screen items-center justify-center overflow-hidden">
      {/* <div className="flex scale-[1] items-center justify-center "> */}

      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        {Pfp()}
      </div>
      <div className="animate-fade-in relative z-10 translate-y-[24em] scale-[1] justify-center rounded-full bg-neutral-800 p-7 ">
        <p
          id="typewriter"
          className="relative inset-0 z-10 flex items-center justify-center text-4xl font-bold text-slate-400 backdrop-blur"
        >
          {currentText}
        </p>
      </div>

      {/* </div> */}
    </main>
  );
}
