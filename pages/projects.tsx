import Head from "next/head";
import ProjectList from "../components/ProjectList";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Mazy | Projects</title>
      </Head>
      <div className="w-full">
        <p className="p-5 text-7xl text-white font-extrabold text-center">
          Projects
        </p>
        <p className="pb-5 text-3xl text-white font-medium text-center">
          I make things sometimes (the quality is questionable)
        </p>
        <div className="border-b-2 border-dashed border-gray-500 max-w-3xl mx-auto"></div>
        <ProjectList />
      </div>
    </>
  );
}
