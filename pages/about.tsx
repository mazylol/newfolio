import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Mazy | About</title>
      </Head>
      <div className="w-full">
        <p className="p-5 text-7xl text-white font-extrabold text-center">
          About Me
        </p>
        <p className="pb-5 text-3xl text-white font-medium text-center">
          Oh, you care enough about me to want to learn more!
        </p>
      </div>
    </>
  );
}
