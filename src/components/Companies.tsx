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
      description: "Desenvolvi e mantive aplicações SAP Fiori/UI5 para otimização de processos internos. Fui responsável pelo controle de versionamento com GIT e pela implementação de novas funcionalidades em JavaScript, melhorando a usabilidade de sistemas legados."
    },
    {
      displayName: "Jornio",
      image: jornio,
      occupation: "Full-stack Developer",
      description: "Participei do desenvolvimento de uma plataforma SaaS para gestão de ponto. Fui responsável pela API RESTful com NestJS e bancos de dados MariaDB/PostgreSQL, além de criar componentes reativos no front-end com VueJS para visualização de relatórios."
    },
    {
      displayName: "Você Azul",
      image: voceazul,
      occupation: "Full-stack Developer",
      description: "Atuei no desenvolvimento de um sistema de gestão de conteúdo (CMS) utilizando Strapi no back-end e VueJS no front-end. Criei interfaces dinâmicas para gerenciar e exibir conteúdo de forma eficiente para os usuários finais."
    },
    {
      displayName: "Influu",
      image: influu,
      occupation: "Front-end Developer",
      description: "Desenvolvi interfaces para uma plataforma de marketing de influência utilizando VueJS e React. Implementei testes unitários com Jest, seguindo a metodologia TDD, para garantir a qualidade e a estabilidade dos componentes da interface."
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
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch justify-center">
          {companies.map((company) => {
            return (
              <div key={company.displayName} className="companyCard bg-gray-50 p-4 rounded-lg shadow-md flex flex-col">
                <div className="flex-grow">
                  <div className="w-full flex flex-col items-center">
                    <Image
                      alt={company.displayName}
                      src={company.image}
                      height={60}
                      width={60}
                      className="rounded-full"
                    />
                    <p className="text-center font-bold text-primary-blue text-lg lg:text-xl mt-2">
                      {company.displayName}
                    </p>
                  </div>
                  <p className="text-center font-bold text-primary-blue text-sm mt-1">
                    {company.occupation}
                  </p>
                  <p className="mt-2 font-semibold text-primary-blue text-xs text-center leading-relaxed">
                    {company.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
