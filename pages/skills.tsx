import Head from "next/head";
import SkillList from "../components/SkillList";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Mazy | Skills</title>
      </Head>
      <div className="w-full">
        <p className="p-5 text-7xl text-white font-extrabold text-center">
          Skills
        </p>
        <p className="pb-5 text-3xl text-white font-medium text-center">
          I know how to do some things (
          <span className="bg-gradient-to-r from-pink-600 to-blue-700 rounded-md text-white p-1">
            badly
          </span>
          ) .
        </p>
        <div className="border-b-2 border-dashed border-gray-500 max-w-2xl mx-auto"></div>
        <SkillList />
      </div>
    </>
  );
}
