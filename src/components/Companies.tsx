import chreative from "@/images/chreative.png";
import jornio from "@/images/jornio.png";
import voceazul from "@/images/voceazul.png";
import influu from "@/images/influu.png";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
}

export default function Companies({ title, subtitle }: Props) {
  const companies = [
    {
      displayName: "Chreative",
      image: chreative,
      occupation: "SAP Consultant",
      assignments: ["GIT Control", "SAPUI5", "SAP Fiori", "Javascript"],
    },
    {
      displayName: "Jornio",
      image: jornio,
      occupation: "Full-stack Developer",
      assignments: ["GIT control", "NestJS", "MariaDB", "PostgreSQL", "VueJS"],
    },
    {
      displayName: "Você Azul",
      image: voceazul,
      occupation: "Full-stack Developer",
      assignments: ["Strapi", "VueJS", "Javascript"],
    },
    {
      displayName: "Influu",
      image: influu,
      occupation: "Front-end Developer",
      assignments: ["VueJS", "React", "Jest", "TDD", "Javascript", "NodeJS"],
    },
  ];

  return (
    <section
      id="companies"
      className="w-full flex flex-col content h-screen items-center bg-white"
    >
      <div className="my-auto sm:mt-24">
        <div className="">
          <h1 className="w-full text-center text-4xl lg:text-6xl font-bold text-primary-blue">
            {title}
          </h1>
          <h3 className="hidden md:flex text-2xl text-center text-primary-blue font-semibold mt-4">
            {subtitle}
          </h3>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {companies.map((company) => {
            return (
              <div key={company.displayName} className="companyCard">
                <div className="mt-2 lg:mt-10 items-center">
                  <div className="w-full flex flex-col items-center">
                    <Image
                      alt={company.displayName}
                      src={company.image}
                      height={80}
                      className=""
                    />
                    <p className="text-center font-bold text-primary-blue text-lg lg:text-2xl lg:mt-2">
                      {company.displayName}
                    </p>
                  </div>
                  <p className="text-center font-bold text-primary-blue text-sm lg:text-base">
                    {company.occupation}
                  </p>
                  <ul className="mt-3 list-disc font-semibold text-primary-blue hidden md:block">
                    {company.assignments.map((assign) => {
                      return (
                        <li key={assign} className="text-xs lg:text-sm">
                          {assign}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
