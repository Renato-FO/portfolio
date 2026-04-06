import instagram from "@/images/instagram.svg";
import github from "@/images/github.svg";
import linkedin from "@/images/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  subtitle_one: string;
  subtitle_two: string;
  subtitle_three: string;
}

const socials = [
  {
    id: "Github",
    alt: "Github",
    link: "https://github.com/Renato-FO",
    icon: github,
  },
  {
    id: "Instagram",
    alt: "Instagram",
    link: "https://www.instagram.com/renatoo_f/",
    icon: instagram,
  },
  {
    id: "Linkedin",
    alt: "Linkedin",
    link: "https://www.linkedin.com/in/renato-ordonho-901890173/",
    icon: linkedin,
  },
];

const techStack = [
  { label: "Frontend", value: "React, Vue, Next.js" },
  { label: "Backend", value: "Node.js, NestJS, TypeScript" },
  { label: "Database", value: "PostgreSQL, MariaDB" },
  { label: "DevOps", value: "Docker, CI/CD, Git" },
];

export default function Header({
  title,
  subtitle_one,
  subtitle_two,
  subtitle_three,
}: Props) {
  return (
    <section id="header" className="w-full h-screen bgCustomized">
      <div className="content h-full flex flex-col justify-center items-start px-2">
        <div className="w-full flex justify-between">
          <div className="w-full flex md:block flex-col justify-center items-center md:w-1/2 lg:w-2/3">
            <h1 className="text-white font-extrabold text-center md:text-left text-5xl md:text-6xl xl:text-8xl max-w-3xl">
              {title}
            </h1>
            <h2 className="text-primary-green text-center md:text-left text-2xl md:text-3xl xl:text-4xl font-extrabold mt-2 max-w-2xl">
              {subtitle_one}
            </h2>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => {
                return (
                  <Link
                    target="_blank"
                    key={social.id}
                    about={social.alt}
                    href={social.link}
                    className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src={social.icon}
                      width={32}
                      height={32}
                      alt={social.alt}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="mt-20 flex gap-16">
              <h3 className="text-base text-center sm:text-left xl:text-lg text-white font-semibold w-[245px]">
                {subtitle_two}
              </h3>
              <h3 className="text-base hidden sm:flex xl:text-lg text-white font-semibold w-[245px]">
                {subtitle_three}
              </h3>
            </div>
          </div>

          {/* Tech Stack Cards - Desktop */}
          <div className="w-1/3 h-full hidden md:flex flex-col justify-center items-center mr-10 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="w-full max-w-xs p-4 rounded-lg border border-primary-green/20 bg-white/5 backdrop-blur-sm hover:border-primary-green/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-primary-green text-sm font-bold uppercase tracking-wider">
                  {tech.label}
                </p>
                <p className="text-white text-sm font-medium mt-1">
                  {tech.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
