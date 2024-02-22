"use client";

import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import "./mousetrail.css";
import MouseTrail from "./Components/mouseTrail";
import NavBar from "./Components/navBar";

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
    <main className=" flex min-h-screen items-center justify-center">
      <div className="animate-grow relative h-[70rem] w-[100rem] scale-[2] rounded-full bg-gradient-to-br from-[#537bf4] to-[#a601ff]">
        <p className="animate-fade-in absolute inset-0 z-10 flex translate-y-[6em] items-center justify-center text-4xl font-bold text-white">
          Hi! I'm Adit Kadepurkar
        </p>
      </div>
      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        {YourComponent()}
      </div>
    </main>
  );
}
