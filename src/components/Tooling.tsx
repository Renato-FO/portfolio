import sapui5 from "@/images/sapui5.png";
import nodejs from "@/images/node.png";
import javascript from "@/images/javascript.png";
import react from "@/images/react.png";
import vuejs from "@/images/vue.png";
import nestjs from "@/images/nest.png";
import typescript from "@/images/typescript.png";
import postgres from "@/images/postgres.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
}

export default function Tooling({ title, subtitle }: Props) {
  const tools = [
    {
      displayName: "SAPUI5",
      image: sapui5,
      link: "https://sapui5.hana.ondemand.com/",
    },
    {
      displayName: "NODEJS",
      image: nodejs,
      link: "https://nodejs.org/en",
    },
    {
      displayName: "JAVASCRIPT",
      image: javascript,
      link: "https://www.javascript.com/",
    },
    {
      displayName: "REACT",
      image: react,
      link: "https://react.dev/",
    },
    {
      displayName: "VUEJS",
      image: vuejs,
      link: "https://vuejs.org/",
    },
    {
      displayName: "NESTJS",
      image: nestjs,
      link: "https://nestjs.com/",
    },
    {
      displayName: "TYPESCRIPT",
      image: typescript,
      link: "https://www.typescriptlang.org/",
    },
    {
      displayName: "POSTGRESQL",
      image: postgres,
      link: "https://www.postgresql.org/",
    },
  ];

  return (
    <section id="tooling" className="w-full h-screen bgCustomized">
      <div className="content h-full flex flex-col px-2 mt-20 sm:mt-24 items-center">
        <h1 className="w-full text-center text-4xl lg:text-6xl font-bold text-primary-green">
          {title}
        </h1>
        <h3 className="hidden md:flex text-2xl text-center text-primary-green font-semibold mt-4">
          {subtitle}
        </h3>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {tools.map((tool) => {
            return (
              <Link
                href={tool.link}
                key={tool.displayName}
                target="_blank"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-md bg-white flex flex-col justify-center items-center"
              >
                <Image
                  src={tool.image}
                  width={60}
                  height={60}
                  alt={tool.displayName}
                />
                <p className="font-bold text-xs sm:text-sm md:text-base text-primary-blue">
                  {tool.displayName}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
