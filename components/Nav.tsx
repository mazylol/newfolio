import Link from 'next/link';

import { BsFillHouseFill, BsPersonFill } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg z-16">
      <Link href="/">
        <div className="mx-2 w-0" id="homep">
          <SideBarIcon icon={<BsFillHouseFill size="32" />} text="Home" />
        </div>
      </Link>
      <Link href="/skills">
        <div className="mx-2 w-0" id="skillsp">
          <SideBarIcon icon={<GiOpenBook size="32" />} text="Skills" />
        </div>
      </Link>
      <Link href="/projects">
        <div className="mx-2 w-0" id="projectsp">
          <SideBarIcon icon={<FaCode size="32" />} text="Projects" />
        </div>
      </Link>
      <Link href="/about">
        <div className="mx-2 w-0" id="aboutp">
          <SideBarIcon icon={<BsPersonFill size="32" />} text="About Me" />
        </div>
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
