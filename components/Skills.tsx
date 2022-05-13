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

export default function Skills() {
  return (
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
  );
}