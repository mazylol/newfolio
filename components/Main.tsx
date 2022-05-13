import Image from "next/image";
import {
  SiJavascript,
  SiTailwindcss,
  SiLua,
  SiC,
  SiRust,
  SiGnubash,
  SiNetlify,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GiSandSnake } from "react-icons/gi";
import { BiGitBranch } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";

export default function Main() {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto text-center p-5">
          <div className="h-48 w-48 relative mx-auto">
            <Image
              src="/profile.jpg"
              alt="My picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full transition-all transform active:rotate-180"
            />
          </div>
          <p className="text-7xl text-white font-extrabold pb-5">Mazy</p>
          <p className="text-xl text-gray-200 font-slim px-20">
            A dumb <span className="font-bold">{Age()}</span> year old
            programmer that likes to be bad at school by day and make degnerate
            programs by night.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
        <p className="text-2xl text-white text-center sm:text-4xl font-bold">
          Skills
        </p>
        <div className="flex flex-wrap justify-center pt-2">
          <div className="skillbox">
            <SiJavascript color="#f0db4f" className="skillicon" />
            <p className="skilltext">Javascript</p>
          </div>
          <div className="skillbox">
            <FaReact color="#61dafb" className="skillicon" />
            <p className="skilltext">React</p>
          </div>
          <div className="skillbox">
            <SiTailwindcss color="#0EA5E9" className="skillicon" />
            <p className="skilltext">Tailwind</p>
          </div>
          <div className="skillbox">
            <GiSandSnake color="#3CCB91" className="skillicon" />
            <p className="skilltext">Python</p>
          </div>
          <div className="skillbox">
            <SiLua color="#000080" className="skillicon" />
            <p className="skilltext">Lua</p>
          </div>
          <div className="skillbox">
            <SiC color="gray" className="skillicon" />
            <p className="skilltext">C</p>
          </div>
          <div className="skillbox">
            <SiRust color="#b7410e" className="skillicon" />
            <p className="skilltext">Rust</p>
          </div>
          <div className="skillbox">
            <SiGnubash color="" className="skillicon" />
            <p className="skilltext">Bash</p>
          </div>
          <div className="skillbox">
            <BiGitBranch color="#f14e32" className="skillicon" />
            <p className="skilltext">Git</p>
          </div>
          <div className="skillbox">
            <FcLinux color="" className="skillicon" />
            <p className="skilltext">Linux</p>
          </div>
          <div className="skillbox">
            <SiNetlify color="#30C8C9" className="skillicon" />
            <p className="skilltext">Netlify</p>
          </div>
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
