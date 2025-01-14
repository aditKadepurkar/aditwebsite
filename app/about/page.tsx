import Image from "next/image";
import * as React from "react";

export default function Home() {
  return (
    <div className="relative top-[12em]  mx-auto mb-8 mt-0 md:mt-8 flex max-w-screen-lg 
          flex-col md:flex-row rounded-xl bg-stone-800 p-4 shadow-2xl shadow-gray-900">
      {/* pfp */}
      <div className="mx-auto md:mx-0 flex justify-center flex-shrink-0 p-10  h-[300px] w-[300px]">
        <Image
          className="rounded-full object-cover"
          src="/pfp.jpg"
          alt="Adit Kadepurkar"
          width={256}
          height={256}
        />
      </div>

      {/* short introduction */}
      <div className="relative">
        <div className="p-4 w-full text-white">
          <h1 className="text-4xl text-center md:text-left">About Me!</h1>
          <h3 className="text-l text-wrap">
          Hey there! I&apos;m Adit Kadepurkar, a second year Computer Science student at the University of Minnesota - TC. 
          I&apos;m passionate about software development, robotics, and machine learning. I work as an undergraduate research assistant at the Robotics: 
          Perception and Manipulation laboratory under Karthik Desingh, where I work on policy learning for robotic manipulation tasks(specifically RL fine tuning methods).
          I&apos;m also a part fo the Rocket Team, where I work on the software team, developing the ground station WINGS. I am an avid rock climber, chess player, and reader(Sci-fi and high fantasy!!). 
          Constantly learning and growing, I&apos;m always looking for new opportunities to challenge myself. Feel free to reach out!
          </h3>
        </div>
      </div>


    </div>




  );
}
