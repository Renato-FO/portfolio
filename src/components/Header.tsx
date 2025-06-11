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
    link: "https://www.linkedin.com/in/renato-ferreira-ordonho-901890173/",
    icon: linkedin,
  },
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
            <h1 className="text-primary-green font-extrabold text-center md:text-left text-5xl md:text-6xl xl:text-8xl max-w-xl">
              {title}
            </h1>
            <h2 className="text-white text-center md:text-left text-base md:text-lg xl:text-xl font-extrabold mt-4 max-w-2xl">
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
                  >
                    <Image
                      src={social.icon}
                      width={25}
                      height={25}
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
          <div className=" w-1/3 h-full hidden md:flex mr-10 lg:text-xs fontCode">
            <div className="code h-full w-full p-2 text-primary-blue font-semibold">
              <p>
                1<span className="ml-6">class Person {`{`}</span>
              </p>
              <p>
                2<span className="ml-8">name: string;</span>
              </p>
              <p>
                3<span className="ml-8">occupation: string;</span>
              </p>
              <p>
                4<span className="ml-8">age: number;</span>
              </p>
              <p>
                5
                <span className="ml-8">
                  constructor (name, occupation, birthyear) {`{`}
                </span>
              </p>
              <p>
                6<span className="ml-10">this.name = name</span>
              </p>
              <p>
                7<span className="ml-10">this.occupation = occupation</span>
              </p>
              <p>
                8
                <span className="ml-10">
                  this.age = new Date().getFullYear() - birthyear
                </span>
              </p>
              <p>
                9<span className="ml-8">{`}`}</span>
              </p>
              <p>
                10<span className="ml-6">{`}`}</span>
              </p>
              <p>11</p>
              <p>
                12<span className="ml-6">const Renato = new Person(</span>
              </p>
              <p>
                13<span className="ml-8">{`"Renato Ordonho"`}</span>
              </p>
              <p>
                14<span className="ml-8">{`"Full-stack Developer"`}</span>
              </p>
              <p>
                15<span className="ml-8">1996</span>
              </p>
              <p>
                16<span className="ml-6">)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
