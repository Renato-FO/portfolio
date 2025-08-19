import Image from "next/image";
import Link from "next/link";


interface Props {
title: string;
subtitle: string;
}

export default function Projects({ title, subtitle }: Props) {
const projects = [
{
name: "Portfolio Pessoal com Next.js",
description: "Desenvolvi este portfólio como uma Single-Page Application (SPA) para demonstrar minhas habilidades. O projeto usa Next.js para renderização estática (SSG), garantindo performance e SEO, com TypeScript para tipagem e TailwindCSS para estilização.",
tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
image: "https://via.placeholder.com/600x400.png?text=My+Portfolio+Project",
liveUrl: "#", // Substituir pelo link do deploy
repoUrl: "https://github.com/Renato-FO/portfolio"
},
// Adicionar mais 1 ou 2 projetos aqui no futuro
];

return (
<section id="projects" className="w-full h-screen bgCustomized flex">
<div className="content flex flex-col px-2 my-auto sm:mt-24 items-center">
<h1 className="w-full text-center text-4xl lg:text-6xl font-bold text-primary-green">
{title}
</h1>
<h3 className="hidden md:flex text-2xl text-center text-primary-green font-semibold mt-4">
{subtitle}
</h3>
<div className="mt-10 w-full max-w-4xl flex flex-col gap-8 items-center">
{projects.map((project) => (
<div key={project.name} className="w-full bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
<div className="md:w-1/3">
<Image src={project.image} alt={project.name} width={600} height={400} className="rounded-lg object-cover w-full h-full" />
</div>
<div className="flex-grow md:w-2/3">
<h2 className="text-2xl lg:text-3xl font-bold text-primary-blue">{project.name}</h2>
<p className="mt-3 text-primary-blue leading-relaxed">{project.description}</p>
<div className="mt-4 flex flex-wrap gap-2">
{project.tech.map(t => <span key={t} className="bg-primary-blue text-white text-sm font-semibold px-3 py-1 rounded-full">{t}</span>)}
</div>
<div className="mt-6 flex gap-4">
<Link href={project.repoUrl} target="_blank" className="font-bold text-primary-green hover:underline text-lg">Ver Código</Link>
<Link href={project.liveUrl} target="_blank" className="font-bold text-primary-green hover:underline text-lg">Ver Online</Link>
</div>
</div>
</div>
))}
</div>
</div>
</section>
);
}