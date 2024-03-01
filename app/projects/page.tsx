import { Project } from "@Components/types";

export default function Home() {
  async function getData() {
    const res = await fetch("http://0.0.0.0:7000/posts");
    const data: Project[] = JSON.parse(await res.json());
    return data;
  }

  return <div>page</div>;
}
