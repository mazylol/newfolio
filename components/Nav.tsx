import Link from "next/link";

import { BsFillHouseFill, BsPersonFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <Link href="/">
        <a>
          <SideBarIcon icon={<BsFillHouseFill size="28" />} text="Home" />
        </a>
      </Link>
      <Link href="/about">
        <a>
          <SideBarIcon icon={<BsPersonFill size="32" />} text="Socials" />
        </a>
      </Link>
      <Link href="/projects">
        <a>
          <SideBarIcon icon={<FaCode size="28" />} text="Projects" />
        </a>
      </Link>
      <Link href="https://github.com/mazylol/">
        <a>
          <SideBarIcon icon={<AiFillGithub size="32" />} text="GitHub" />
        </a>
      </Link>
    </div>
  );
}

const SideBarIcon = ({ icon, text = "Tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
