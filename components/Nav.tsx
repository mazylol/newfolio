import Link from 'next/link';

import { BsFillHouseFill, BsPersonFill } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg z-16">
      <Link href="/">
        <a className="mx-2 w-0">
          <SideBarIcon icon={<BsFillHouseFill size="32" />} text="Home" />
        </a>
      </Link>
      <Link href="/skills">
        <a className="mx-2 w-0">
          <SideBarIcon icon={<GiOpenBook size="32" />} text="Skills" />
        </a>
      </Link>
      <Link href="/projects">
        <a className="mx-2 w-0">
          <SideBarIcon icon={<FaCode size="32" />} text="Projects" />
        </a>
      </Link>
      <Link href="/about">
        <a className="mx-2 w-0">
          <SideBarIcon icon={<BsPersonFill size="32" />} text="About Me" />
        </a>
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
