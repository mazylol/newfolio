import Link from 'next/link';

export default function ProjectList() {
  return (
    <div className="px-20 grid grid-cols-2 pt-5 pb-5 ml-16 sm:gap-0 md:gap-4 lg:gap-8">
      <Link href="https://discode.mazylol.com">
        <div className="project-item bg-[url('/projects/botatar.png')] group">
          <div className="project-container">
            <p className="text-white font-bold text-5xl p-2">Discode</p>
            <p className="sm:text-sm md:text-2xl lg:text-3xl text-gray-200 p-2">
              Discode is my current endeavor. It is a Discord bot that provides information on
              Languages, Frameworks, Libraries, Tools, and People.
            </p>
          </div>
        </div>
      </Link>
      <Link href="https://github.com/mazylol/mazbot">
        <div className="project-item bg-[url('/projects/mazbot.png')] group">
          <div className="project-container">
            <p className="text-white font-bold text-5xl p-2">Mazbot</p>
            <p className="sm:text-sm md:text-2xl lg:text-3xl text-gray-200 p-2">
              Mazbot was my first ever full fledged Discord bot. It is what got me into this hobby.
              It is kinda broken now but I still love it.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
