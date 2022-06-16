import Link from 'next/link';
import Image from 'next/image';

import { FaReact, FaVuejs } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';
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
  SiSvelte,
  SiCircleci,
  SiNeovim
} from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';
import { GiSandSnake } from 'react-icons/gi';

export default function SkillList() {
  return (
    <div className="px-20 grid grid-cols-1 pt-5 pb-5">
      <p className="skills-header pt-0">Languages</p>
      <div className="skill-item">
        <Link href="https://www.typescriptlang.org/">
          <a>
            <SiTypescript size="64" color="#007acc" />
          </a>
        </Link>
        <p className="skill-text">
          I use Typescript in most web frameworks, as well as Discord bots. It is nice, it makes
          coding for the web a tiny bit less painful.
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://www.python.org/">
          <a>
            <GiSandSnake size="64" color="#3CCB91" />
          </a>
        </Link>
        <p className="skill-text">
          I use Python, mainly for Discord bots. I have been using it less and less as indentaion is
          annoying. It was my first language.
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://en.wikipedia.org/wiki/C_(programming_language)">
          <a>
            <SiC size="64" color="gray" />
          </a>
        </Link>
        <p className="skill-text">
          I use C for some Discord bots. Mostly to torture myself. I do really like the language
          though. Still better than C++.
        </p>
      </div>
      <div className="skill-item">
        <Link href="http://www.lua.org/">
          <a>
            <SiLua size="64" color="#000080" />
          </a>
        </Link>
        <p className="skill-text">I use Lua every once in a while for very light scripting.</p>
      </div>
      <div className="skill-item">
        <Link href="https://www.gnu.org/software/bash/">
          <a>
            <SiGnubash size="64" />
          </a>
        </Link>
        <p className="skill-text">
          I use Bash practically every day as it is my Linux shell of choice. It is also used to
          script some things and make install scripts.
        </p>
      </div>
      <p className="skills-header">Libraries</p>
      <div className="skill-item">
        <Link href="https://reactjs.org/">
          <a>
            <FaReact size="64" color="#61dafb" />
          </a>
        </Link>
        <p className="skill-text">
          I use React for nearly all of my websites (including this one). I enjoy the ease of use
          and the vast array of third-party libraries I can use with it.
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://nextjs.org/">
          <a>
            <SiNextdotjs size="64" color="#000000" />
          </a>
        </Link>
        <p className="skill-text">
          I really like Next. I think it is a fantastic framework, so much so that I am using it for
          this site!
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://vuejs.org/">
          <a>
            <FaVuejs size="64" color="#42b883" />
          </a>
        </Link>
        <p className="skill-text">
          I experiment with Vue sometimes. I like it quite a lot actually. I just never find
          something I would like to use it for.
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://nuxtjs.org/">
          <a>
            <SiNuxtdotjs size="64" color="#42b883" />
          </a>
        </Link>
        <p className="skill-text">
          It is a similar story to Vue. I would love to do a project with Nuxt, I think it is
          amazing. I just need to find the time. Also, Nuxt 3 is freaking amazing!
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://svelte.dev/">
          <a>
            <SiSvelte size="64" color="#ff3e00" />
          </a>
        </Link>
        <p className="skill-text">
          Svelte is borderline insanity. I love it with all of my heart and cannot fathom the things
          that I can do with it. The possibilities are endless.
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://tailwindcss.com/">
          <a>
            <SiTailwindcss size="64" color="#38bdf8" />
          </a>
        </Link>
        <p className="skill-text">
          I love Tailwind. I use it to style everything, makes my life way easier.
        </p>
      </div>
      <p className="skills-header">Tools</p>
      <div className="skill-item">
        <Link href="https://git-scm.com/">
          <a>
            <BiGitBranch size="64" color="#f14e32" />
          </a>
        </Link>
        <p className="skill-text">
          I use Git for Open Source. I make 99% of my projects Open Source on my{' '}
          <span className="text-blue-500 hover:underline underline-offset-4">
            <Link href="https://github.com/mazylol">
              <a>Github</a>
            </Link>
          </span>
          .
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://vercel.com/">
          <a>
            <SiVercel size="64" color="#000000" />
          </a>
        </Link>
        <p className="skill-text">I use Vercel for all of my deployments. It is very nice.</p>
      </div>
      <div className="skill-item">
        <Link href="https://www.cloudflare.com/">
          <a>
            <SiCloudflare size="64" color="#f6821f" />
          </a>
        </Link>
        <p className="skill-text">
          I use Cloudflare to protect my sites from attackers and manage my DNS. It is great and I
          highly recommend.
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://www.kernel.org/">
          <a>
            <FcLinux size="64" />
          </a>
        </Link>
        <p className="skill-text">
          I use Linux on the desktop. I use Arch BTW. I make sure to keep sneaky Bill far away.
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://circleci.com/">
          <a>
            <SiCircleci size="64" color="black" />
          </a>
        </Link>
        <p className="skill-text">
          I use CircleCI for all of my CI/CD. It is a great tool. It works well with my projects.
        </p>
      </div>
      <p className="skills-header">Editors</p>
      <div className="skill-item">
        <Link href="https://code.visualstudio.com/">
          <a>
            <Image src="/logos/vscode.svg" width="64" height="64" alt="vscode logo" />
          </a>
        </Link>
        <p className="skill-text">
          I use VS Code for most of my web projects and other massive things. It is a great editor.
        </p>
      </div>
      <div className="skill-item">
        <Link href="https://neovim.io/">
          <a>
            <SiNeovim size="64" color="#74d05c" />
          </a>
        </Link>
        <p className="skill-text">
          Neovim is by far my favorite text editor. It is fast, reliable, and a breeze to customize.
        </p>
      </div>
    </div>
  );
}
