import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mazy</title>
      </Head>
      <div className="w-full">
        <div className="text-center mx-16 pt-5">
          <div className="h-48 w-48 relative mx-auto">
            <Image
              src="/profile.jpg"
              alt="My picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full transition-all active:rotate-180"
            />
          </div>
          <p className="text-7xl text-white font-extrabold p-5">Hey 👋</p>
          <p className="text-3xl text-gray-300 font-medium p-5">
            Heyo, my name is Landon and I like to{" "}
            <span className="bg-gradient-to-r from-pink-600 to-blue-700 rounded-md text-white p-1">
              create
            </span>{" "}
            awesome stuff.
          </p>
          <div className="text-white">
            <p className="text-5xl font-bold">Such as:</p>
            <ul className="p-5 text-3xl list-disc">
              <li>Websites (Obviously)</li>
              <li>Discord Bots</li>
              <li>Linux Scripts</li>
              <li>APIs</li>
              <li>...and more</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
