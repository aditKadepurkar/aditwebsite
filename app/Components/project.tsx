import Image from "next/image";

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
  return (
    <div className="hover: relative w-1/3 scale-100 rounded-2xl bg-neutral-800 p-5 transition duration-100 ease-in-out ">
      <div className="flex py-3">
        <h1 className="m-auto w-3/5 px-2 text-center text-2xl font-bold text-zinc-200">
          {props.title}
        </h1>
        <Image
          className="relative z-10 w-2/5 scale-100 overflow-hidden rounded-2xl shadow-2xl shadow-gray-900"
          src={`${props.src}`}
          alt="/linkedin.png"
          width={70}
          height={70}
        />
      </div>
      <p className="text-ellipsis text-zinc-400">{truncate(props.desc)}</p>
    </div>
  );
};

export default ProjectModal;
