import { Project } from "@Components/types";
import Link from "next/link";
import Image from "next/image";
import ProjectModal from "../Components/project";

const MAX_BODY_PEEK = 100;

async function getData() {
  const res = await fetch("http://0.0.0.0:7000/projects");
  const data: Project[] = JSON.parse(await res.json());
  return data;
}

function truncate(text: string) {
  const ret: string = text.substring(0, MAX_BODY_PEEK);
  return ret;
}

export default async function Home() {
  const projects = await getData();
  return (
    <div className="relative top-[12em] mx-10 mt-8 flex-wrap rounded-xl bg-stone-800 p-10 shadow-2xl shadow-gray-900">
      <ul className="flex flex-wrap items-center justify-center">
        {projects.map((project) => (
          <div className="p-10">
            <li key={project.number}>
              <div className="">
                <ProjectModal
                  title={project.title}
                  src={project.src}
                  desc={project.description}
                />
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
