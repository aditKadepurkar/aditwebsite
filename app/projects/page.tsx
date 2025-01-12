import { Project } from "@Components/types";
import Link from "next/link";
import Image from "next/image";
import ProjectModal from "../Components/project";

const MAX_BODY_PEEK = 100;

function getData() {
  // moving to static data
  const data: Project[] = [
    {
      "number": "1",
      "title": "Delphi",
      "authors": ["Adit Kadepurkar", "Matthew Xu"],
      "description": "Delphi makes using computers easier than every before!",
      "date": "08-21-24",
      "src": "/bg2.png",
      "github": "https://github.com/aditkadepurkar/delphi/",
      // "writeup": "/blog/1Delphi"
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
      "description": "SpeechHacks is a tool that helps you improve your speaking skills by providing feedback on your speech.",
      "date": "01-21-24",
      "src": "/bg3.png",
      "github": "https://github.com/aditKadepurkar/SpeechHacks",
      "writeup": "/blog/2SpeechHacks"
    },
    {
      "number": "4",
      "title": "Evaluating IK-RRT",
      "authors": ["Adit Kadepurkar, Kuba Kedzior, Thomas Weber"],
      "description": "Project that evaluates the performance of the Inverse Kinematics RRT algorithm on the Canadarm2 for space settings.",
      "date": "01-21-24",
      "src": "/canadarm.png",
      "writeup": "/blog/3Canadarm"
    },
    {
      "number": "5",
      "title": "WINGS",
      "authors": ["Adit Kadepurkar, Kuba Kedzior, Thomas Weber"],
      "description": "WINGS is a ground station that provides real-time telemetry data for the UMN Rocket Team.",
      "date": "01-21-24",
      "src": "/wingslogo.png"
    },
    {
      "number": "6",
      "title": "Personal Website",
      "authors": ["Adit Kadepurkar"],
      "description": "My personal website!(this one)",
      "date": "12-21-24",
      "src": "/bg2.png",
      "github": "https://github.com/aditKadepurkar/aditwebsite",
      // "writeup": "/blog/4PersonalWebsite"
    }

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
                  writeup={project.writeup}
                />
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
}
