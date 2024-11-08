"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export type DemoProps = {
  title: string;
  src: string;
};

const DemoModal = (props: DemoProps) => {
  const defaultContent = (
    <Link href={`/demos/${props.title}`}>
      <div className={`cursor-pointer relative p-4 overflow-hidden top-0 left-0 w-full h-full flex flex-col justify-center items-center
      text-center text-2xl font-bold z-10 transition duration-300 ease-in-out opacity-100 hover:opacity-50}`}>
          <h1 className="m-auto px-2 py-1 text-center justify-center flex text-2xl font-bold text-zinc-900 bg-slate-200 rounded-xl">
            {props.title}
          </h1>
          <Image
            className="relative -z-10 w-2/5 scale-100 object-cover overflow-hidden rounded-2xl shadow-2xl shadow-gray-900"
            src={`${props.src}`}
            alt="/linkedin.png"
            fill
          />
      </div>
    </Link>
  )

  return (
    <div
      className={`relative sm:h-[22rem] sm:w-[27rem] h-[16rem] w-[14rem] scale-100 rounded-2xl bg-neutral-900 m-auto my-3 transition duration-300 ease-in-out overflow-hidden `}
    >
      {defaultContent}
  
    </div>
  );
};

export default DemoModal;
