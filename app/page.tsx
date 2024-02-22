'use client';

import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import clsx from 'clsx';
import './mousetrail.css';
import MouseTrail from './Components/mouseTrail';
import NavBar from './Components/navBar';

const YourComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute place-items-center `}
    >
      {<Image 
          className="scale-100 cursor-default relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full hover:animate-pfp overflow-hidden transition duration-1000 ease-in-out"
          src="/me3.png"
          alt="/me.png"
          width={500}
          height={500}
          priority
          onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={isHovered ? { transform: 'scale(1.25)' } : { transform: 'scale(1)' }}
          // style={{ borderRadius: "100%",

          //   // transition: "transform 0.2s ease-in-out",
          //   // border: "0.5 rem solid rgb(255 255 255 /15%)"
          // }}
        />}
    </div>
  );
};

export default function Home() {
  return (

    <main className=" flex items-center justify-center min-h-screen">
        <div className="relative w-[100rem] h-[70rem] rounded-full bg-gradient-to-br from-[#537bf4] to-[#a601ff] animate-grow scale-[2]">

          <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 translate-y-[6em] animate-fade-in">Hi! I'm Adit Kadepurkar</p>

        </div>
        <div className="absolute inset-0 flex items-center justify-center z-[5]">
          {YourComponent()}
        </div>



          
    </main>

  );
}
