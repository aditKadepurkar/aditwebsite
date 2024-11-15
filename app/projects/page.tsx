import { Project } from "@Components/types";
import Link from "next/link";
import Image from "next/image";
import ProjectModal from "../Components/project";

const MAX_BODY_PEEK = 100;

function getData() {
  const data: Project[] = [
    {
      "number": "1",
      "title": "Delphi",
      "authors": ["Adit Kadepurkar", "Matthew Xu"],
      "description": "Delphi makes using computers easier than every before!",
      "date": "08-21-24",
      "src": "/bg2.png",
      "github": "https://github.com/aditkadepurkar/delphi/",
    },
    {
      "number": "2",
      "title": "UFC Packet Parser",
      "authors": ["Adit Kadepurkar"],
      "description": "A SALAE logic analyzer script that parses UFC(Universal Flight Computer) packets for the UMN Rocket Team to analyze and debug their flight data.",
      "date": "01-21-24",
      "src": "/bg3.png",
      "github": "https://github.com/aditKadepurkar/UfcPktParser"
    },
    {
      "number": "3",
      "title": "Speech Hacks",
      "authors": ["Adit Kadepurkar, Matthew Xu"],
      "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide!",
      "date": "01-21-24",
      "src": "/bg3.png",
      "github": "https://github.com/mattx0601/SpeechHacks"
    },
    {
      "number": "4",
      "title": "IK-RRT CANADARM",
      "authors": ["Adit Kadepurkar, Kuba Kedzior, Thomas Weber"],
      "description": "T",
      "date": "01-21-24",
      "src": "/canadarm.png"
    },
    {
      "number": "5",
      "title": "WINGS",
      "authors": ["Adit Kadepurkar, Kuba Kedzior, Thomas Weber"],
      "description": "WOWWWWWWWWWWWWWWWWW",
      "date": "01-21-24",
      "src": "/wingslogo.png"
    },

  ];
  return data;
}

function truncate(text: string) {
  const ret: string = text.substring(0, MAX_BODY_PEEK);
  return ret;
}

export default async function Home() {
  const projects = await getData();
  return (
    <div className="relative md:top-[12em] top-[6em] mx-10 md:mt-8 mt-2 flex-wrap rounded-xl bg-stone-800 p-10 shadow-2xl shadow-gray-900">
      <ul className="flex flex-wrap items-center justify-center">
        {projects.map((project) => (
            <li key={project.number}>
              <div className="md:p-10 p-5">
                <ProjectModal
                  title={project.title}
                  src={project.src}
                  desc={project.description}
                  github={project.github}
                  website={project.website}
                />
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
}
