import Head from "next/head";
import Link from "next/link";

import { FaGithub, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Head>
        <title>Mazy | About</title>
      </Head>
      <div className="w-full">
        <p className="p-5 text-7xl text-white font-extrabold text-center ml-16">
          About Me
        </p>
        <p className="pb-5 text-3xl text-white font-medium text-center ml-16">
          Oh, you care enough about me to want to learn more!
        </p>
        <p className="text-2xl text-gray-200 text-center ml-16 p-5">
          So my name is Landon and I like to program, a lot. I am{" "}
          <span className="font-bold">{Age()}</span> years of age. I got into
          programming during the great quarantine of 2020. I was bored out of my
          mind and started to learn Python. At first it started with Discord
          bots, then it bloomed into other things. Such as Arch Installation
          Scripts, SFTP Clients, and Websites. Now I program nearly every day
          and have a fantastic time doing so.
        </p>
        <p className="text-5xl text-white font-medium text-center pb-5 ml-16">
          Socials
        </p>
        <div className="flex flex-row justify-center ml-16">
          <Link href="https://github.com/mazylol">
            <FaGithub className="mx-2 text-black hover:text-gray-400 transition-colors duration-200 text-7xl" />
          </Link>
          <Link href="https://twitter.com/mazylol">
            <FaTwitter className="mx-2 text-[#1DA1F2] hover:text-gray-400 transition-colors duration-200 text-7xl" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCTU12OQOJq55jgqM88P8q0w">
            <FaYoutube className="mx-2 text-[#FF0000] hover:text-gray-400 transition-colors duration-200 text-7xl" />
          </Link>
          <Link href="https://instagram.com/adumbcoder">
            <FaInstagram className="mx-2 text-pink-600 hover:text-gray-400 transition-colors duration-200 text-7xl" />
          </Link>
        </div>
      </div>
    </>
  );
}

function Age() {
  var dob = new Date("09/05/2006");
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  return age;
}
