"use client";

import Image from "next/image";
import * as React from "react";
import { useState } from "react";

const YourComponent = () => {
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
          // style={{ borderRadius: "100%",

          //   // transition: "transform 0.2s ease-in-out",
          //   // border: "0.5 rem solid rgb(255 255 255 /15%)"
          // }}
        />
      }
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-[url('/bg3.png')] bg-cover">
      {/* <div className="flex scale-[1] items-center justify-center "> */}

      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        {YourComponent()}
      </div>
      <div className="animate-fade-in relative z-10 translate-y-[24em] scale-[1] justify-center rounded-full bg-gray-300 p-5 ">
        <p className="relative inset-0 z-10 flex items-center justify-center text-4xl font-bold text-white backdrop-blur">
          Hi! I'm Adit Kadepurkar
        </p>
      </div>

      {/* </div> */}
    </main>
  );
}
