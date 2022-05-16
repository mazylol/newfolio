import Link from "next/link";

import { FaReact, FaVuejs } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import {
  SiTypescript,
  SiTailwindcss,
  SiLua,
  SiC,
  SiGnubash,
  SiNextdotjs,
  SiNuxtdotjs,
  SiVercel,
  SiCloudflare,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { GiSandSnake } from "react-icons/gi";

export default function SkillList() {
  return (
    <div className="px-20 grid grid-cols-1 pt-5 pb-5">
      <p className="skills-header pt-0">Languages</p>
      <div className="skillitem relative">
        <SiTypescript size="64" color="#007acc" />
        <p className="text-gray-200 font-medium ml-5">
          I use Typescript in most Javascript frameworks, as well as Discord
          bots. It is nice, it makes coding for the web a tiny bit less painful.
        </p>
      </div>
      <div className="skillitem">
        <GiSandSnake size="64" color="#3CCB91" />
        <p className="text-gray-200 font-medium ml-5">
          I use Python, mainly for Discord bots. I have been using it less and less as indentaion is annoying. It was my first language.
        </p>
      </div>
      <div className="skillitem">
        <SiC size="64" color="gray" />
        <p className="text-gray-200 font-medium ml-5">
          I use C for some Discord bots. Mostly to torture myself. I do really
          like the language though. Still better than C++.
        </p>
      </div>
      <div className="skillitem">
        <SiLua size="64" color="#000080" />
        <p className="text-gray-200 font-medium ml-5">
          I use Lua every once in a while for very light scripting.
        </p>
      </div>
      <div className="skillitem">
        <SiGnubash size="64" />
        <p className="text-gray-200 font-medium ml-5">
          I use Bash practically every day as it is my Linux shell of choice. It
          is also used to script some things and make install scripts.
        </p>
      </div>
      <p className="skills-header">Libraries</p>
      <div className="skillitem">
        <FaReact size="64" color="#61dafb" />
        <p className="text-gray-200 font-medium ml-5">
          I use React for nearly all of my websites (including this one). I
          enjoy the ease of use and the vast array of third-party libraries I
          can use with it.
        </p>
      </div>
      <div className="skillitem">
        <SiNextdotjs size="64" color="#000000" />
        <p className="text-gray-200 font-medium ml-5">
          I really like Next. I think it is a fantastic framework, so much so
          that I am using it for this site!
        </p>
      </div>
      <div className="skillitem">
        <FaVuejs size="64" color="#42b883" />
        <p className="text-gray-200 font-medium ml-5">
          I experiment with Vue sometimes. I like it quite a lot actually. I
          just never find something I would like to use it for.
        </p>
      </div>
      <div className="skillitem">
        <SiNuxtdotjs size="64" color="#42b883" />
        <p className="text-gray-200 font-medium ml-5">
          It is a similar story to Vue. I would love to do a project with Nuxt,
          I think it is amazing. I just need to find the time.
        </p>
      </div>
      <div className="skillitem">
        <SiTailwindcss size="64" color="#38bdf8" />
        <p className="text-gray-200 font-medium ml-5">
          Love Tailwind. I use it to style everything, makes my life way easier.
        </p>
      </div>
      <p className="skills-header">Tools</p>
      <div className="skillitem">
        <BiGitBranch size="64" color="#f14e32" />
        <p className="text-gray-200 font-medium ml-5">
          I use Git for Open Source. I make 99% of my projects Open Source on my{" "}
          <span className="text-blue-500 hover:underline underline-offset-4">
            <Link href="https://github.com/mazylol">
              <a>Github</a>
            </Link>
          </span>
          .
        </p>
      </div>
      <div className="skillitem">
        <SiVercel size="64" color="#000000" />
        <p className="text-gray-200 font-medium ml-5">
          I use Vercel for all of my deployments. It is very nice.
        </p>
      </div>
      <div className="skillitem">
        <SiCloudflare size="64" color="#f6821f" />
        <p className="text-gray-200 font-medium ml-5">
          I use Cloudflare to protect my sites from attackers and manage my DNS.
          It is great and I highly recommend.
        </p>
      </div>
      <div className="skillitem">
        <FcLinux size="64" />
        <p className="text-gray-200 font-medium ml-5">
          I use Linux on the desktop. I use Arch BTW. I make sure to keep sneaky
          Bill far away.
        </p>
      </div>
    </div>
  );
}
