"use client";

import Image from "next/image";
import * as React from "react";
import { useState } from "react";

const Pfp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`absolute md:place-items-center`}>
      {
        <Image
          className="relative scale-100 cursor-default overflow-hidden rounded-full shadow-2xl shadow-gray-900 transition duration-1000 ease-in-out"
          src={ isHovered ? "/me3.png" : "/me3.png"}
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
export default Pfp;
