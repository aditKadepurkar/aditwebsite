import React from "react";
import DemoModal from "../Components/demoWidget";

export default function Home() {
  const demos = [
    {
      number: "1",
      title: "Delphi",
      src: "/bg2.png",
      // ref: "/demos/delphi",
    },
  ];

  return (
    <div className="relative top-[12em]  mx-auto mb-8 mt-8 flex max-w-screen-lg flex-col rounded-xl bg-stone-800 p-4 shadow-2xl shadow-gray-900">
      <h1 className="text-4xl text-white">WIP.</h1>
        <ul className="flex flex-wrap items-center justify-center">
        {demos.map((demo) => (
            <li key={demo.number}>
              <div className="md:p-10 p-5">
                <DemoModal
                  title={demo.title}
                  src={demo.src}
                  // ref={demo.ref}
                />
              </div>
            </li>
        ))}
      </ul>
    </div>




  );
}
