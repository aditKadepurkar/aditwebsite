"use client";

import Image from "next/image";
import { useState } from "react";

const MAX_BODY_PEEK = 100;

function truncate(text: string) {
  const ret: string = text.substring(0, MAX_BODY_PEEK);
  return ret;
}

export type ProjectProps = {
  title: string;
  src: string;
  desc: string;
};

const ProjectModal = (props: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverContent = (
    <div className={`absolute p-4 top-0 left-0 w-full h-full flex-col justify-center items-center
    text-center text-2xl font-bold z-10 transition duration-300 ease-in-out flex py-6 ${isHovered ? "opacity-100" : "opacity-0"}`}>
      <h1 className="m-auto px-2 text-center text-2xl font-bold text-zinc-200">
        {props.title}
      </h1>
      <p className="text-ellipsis text-zinc-400">{truncate(props.desc)}</p>
    </div>
  );
  const defaultContent = (
    <div className={`relative p-4 overflow-hidden top-0 left-0 w-full h-full flex flex-col justify-center items-center
    text-center text-2xl font-bold z-10 transition duration-300 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}>
      <div className={`flex py-3`}>
        <h1 className="m-auto w-3/5 px-2 text-center text-2xl font-bold text-zinc-200">
          {props.title}
        </h1>
        <Image
          className="relative -z-10 w-2/5 scale-100 overflow-hidden rounded-2xl shadow-2xl shadow-gray-900"
          src={`${props.src}`}
          alt="/linkedin.png"
          width={100}
          height={100}
        />
      </div>
    </div>

  )

  return (
    <div
      className={`relative h-70 w-80 scale-100 rounded-2xl bg-neutral-900 p-5 m-auto my-3 transition duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      {defaultContent}
      {hoverContent}
  
    </div>
  );
};

export default ProjectModal;
