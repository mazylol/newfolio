import Link from 'next/link';

import { BsFillHouseFill, BsPersonFill } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg z-16">
      <Link href="/">
        <span id="home" className="mx-2 w-0">
          <SideBarIcon icon={<BsFillHouseFill size="32" />} text="Home" />
        </span>
      </Link>
      <Link href="/skills">
        <span id="skills" className="mx-2 w-0">
          <SideBarIcon icon={<GiOpenBook size="32" />} text="Skills" />
        </span>
      </Link>
      <Link href="/projects">
        <span id="projects" className="mx-2 w-0">
          <SideBarIcon icon={<FaCode size="32" />} text="Projects" />
        </span>
      </Link>
      <Link href="/about">
        <span id="about" className="mx-2 w-0">
          <SideBarIcon icon={<BsPersonFill size="32" />} text="About Me" />
        </span>
      </Link>
    </div>
  );
}

const SideBarIcon = ({ icon, text = 'Tooltip' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
