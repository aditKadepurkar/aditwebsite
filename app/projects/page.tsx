import { Project } from "@Components/types";
import Link from "next/link";

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
    <div className="relative top-[12em]  mx-auto mt-8 flex max-w-screen-xl flex-wrap rounded-xl bg-stone-800 p-4 shadow-2xl shadow-gray-900">
      <ul>
        {projects.map((project) => (
          <li key={project.number}>
            <div className="w-1/2 px-2 py-3">
              <div className="p-4">
                <h1 className="justify-left font-bold-100 flex text-3xl text-blue-400">
                  <Link href={`/`}>
                    {" "}
                    <a className="font-bold">{project.title} </a>{" "}
                  </Link>
                </h1>
                <p className="justify-left whitespace-wrap overflow-ellipsis text-base text-slate-200">
                  {truncate(project.description)}...
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
