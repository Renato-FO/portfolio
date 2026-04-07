import { Dictionary } from "@/pages/api/locales/types";

export const DICTIONARIES: Record<string, Dictionary> = {
  "en-US": {
    // Navigation
    menu_home: "Home",
    menu_about: "About",
    menu_companies: "Companies",
    menu_contact: "Contact",
    menu_tooling: "Tooling",
    nav_about: "About",
    nav_projects: "Projects",
    nav_blog: "Blog",
    nav_contact: "Contact",
    nav_resume: "Resume",
    lang: "Language",

    // Hero
    title: "Renato F. Ordonho",
    subtitle_one: "Fullstack Developer (React, TypeScript, Node.js, Vue.js)",
    subtitle_two:
      "Mastering Webcraft: Precision and Expertise in Crafting High-Performance Digital Experiences.",
    subtitle_three:
      "Elevate with Precision: Crafting Professional Web Experiences with Technical Mastery.",
    hero_badge: "Open to Remote International Opportunities",
    hero_title: "Fullstack Developer",
    hero_subtitle:
      "Building scalable web applications with React, TypeScript, Node.js, and Vue.js. 5+ years of experience delivering 20+ enterprise applications, improving performance by up to 30%, and reducing legacy codebases by 60%. Fullstack expertise from component-based frontend architecture to REST APIs, databases, and cloud deployments.",
    hero_view_projects: "View Projects",
    hero_download_resume: "Download Resume",
    stats_years_value: "5+",
    stats_projects_value: "20+",
    stats_tech_value: "15+",
    stats_continents_value: "1",
    stats_years_label: "Years Experience",
    stats_projects_label: "Apps Delivered",
    stats_tech_label: "Technologies",
    stats_continents_label: "Continent",

    // About / Tech Stack
    about_title: "About Me",
    about_text:
      "Fullstack Developer with 5+ years of experience building scalable web applications using React, TypeScript, Vue.js, Node.js, and NestJS. Specialized in component-based architecture, REST API design, performance optimization, and data-driven interfaces for enterprise environments. Proven track record delivering 20+ enterprise applications, improving performance by up to 30%, and reducing legacy codebases by 60%. Experience with PostgreSQL, MongoDB, headless CMS (Strapi), and AI-powered features using LLMs such as GPT-4 and Claude, including RAG pipelines and LangChain.",
    techstack_title: "Tech Stack",
    techstack_subtitle:
      "Core technologies I work with to build robust solutions",
    frontend_title: "Frontend",
    frontend_items:
      "React, Vue.js (2/3), TypeScript, JavaScript (ES6+), HTML5, CSS3, SAPUI5, SAP Fiori",
    frontend_tags: "React,Vue.js,TypeScript,SAPUI5",
    backend_title: "Backend",
    backend_items: "Node.js, NestJS, REST APIs, GraphQL, Express",
    backend_tags: "Node.js,NestJS,REST APIs",
    cloud_title: "Tools & DevOps",
    cloud_items: "Git, CI/CD (GitLab), Agile (Scrum), Figma, AWS",
    cloud_tags: "Git,CI/CD,AWS,Figma",
    database_title: "Database",
    database_items: "PostgreSQL, MongoDB, MariaDB",
    database_tags: "PostgreSQL,MongoDB,MariaDB",

    // Tooling (legacy)
    tooling_title: "Tooling",
    tooling_subtitle: "Some of the tools I use most",

    // Companies (legacy)
    companies_title: "Companies",
    companies_subtitle: "Companies I have collaborated with",

    // Projects
    projects_title: "Featured Projects",
    projects_subtitle:
      "Selected work showcasing technical expertise and business impact",
    projects_view_all: "View All Projects",
    projects_view_case: "View Details",
    project1_category: "Enterprise SAP",
    project1_year: "2022–Present",
    project1_title: "SAP Fiori HR Systems",
    project1_desc:
      "Delivered 20+ SAP Fiori (SAPUI5) applications for enterprise HR systems used by organizations with 5,000–10,000+ employees. Improved frontend performance by ~30% and reduced codebase size by ~60% through refactoring initiatives. Implemented CI/CD pipelines enabling 30+ deployments per week.",
    project1_tags: "SAPUI5,SAP Fiori,TypeScript,CI/CD",
    project2_category: "Fintech",
    project2_year: "2023–2025",
    project2_title: "Debt Management Platform",
    project2_desc:
      "Fullstack development using React, Vue.js, and Node.js for a debt management platform. Automated financial workflows, reducing manual operational work by ~70%. Implemented notification systems (WhatsApp, SMS, email) reducing API costs by ~$150/month. Built features for automated debt registration, agreement generation, and payment processing.",
    project2_tags: "React,Vue.js,Node.js,PostgreSQL",
    project3_category: "AI / SaaS",
    project3_year: "2022",
    project3_title: "AI-Powered Content Platform",
    project3_desc:
      "Fullstack development with Vue.js, React, and Node.js. Built AI-powered features using GPT-3 and prompt engineering strategies. Improved backend performance by reducing API response times from 17s to 11s. Integrated headless CMS (Strapi) and third-party services including OpenAI, Google Ads, and Facebook Ads. Supported AWS-based environments for scalable deployment.",
    project3_tags: "Vue.js,React,Node.js,OpenAI,Strapi",
    project4_category: "Marketing Tech",
    project4_year: "2021–2022",
    project4_title: "Influencer Marketing Platform",
    project4_desc:
      "Fullstack development using React, Vue.js, and Node.js for 300+ influencers. Improved Google PageSpeed scores from 65 to 98 through frontend optimization. Increased organic traffic by ~15% through SEO improvements. Built responsive interfaces optimized for Core Web Vitals and user experience.",
    project4_tags: "React,Vue.js,Node.js,SEO",

    // Articles
    articles_title: "Latest Articles",
    articles_subtitle: "Technical insights and development best practices",
    articles_view_all: "View All Articles",
    article1_date: "Coming Soon",
    article1_read: "— min read",
    article1_title: "Building Scalable Fullstack Applications",
    article1_desc:
      "Best practices for building enterprise-grade applications with React, Node.js, and PostgreSQL, focusing on performance optimization and scalable architecture.",
    article1_tags: "React,Node.js,Fullstack",
    article2_date: "Coming Soon",
    article2_read: "— min read",
    article2_title: "Integrating AI Features with Fullstack Development",
    article2_desc:
      "A practical guide to integrating AI-powered features using LLMs like GPT-4 and Claude in fullstack applications, including RAG pipelines and LangChain.",
    article2_tags: "AI,LLM,Fullstack",
    article3_date: "Coming Soon",
    article3_read: "— min read",
    article3_title: "Optimizing API Performance",
    article3_desc:
      "Practical techniques for optimizing API response times and database queries, reducing response times from 17s to 11s through backend optimization.",
    article3_tags: "API,Performance,Node.js",

    // Contact / CTA
    contact_title: "Send me a message!",
    contact_subtitle:
      "Got a question or proposal, or just want to say hello? Go ahead.",
    contact_name_label: "Your Name",
    contact_name_placeholder: "Type your name",
    contact_email_label: "Your Email Address",
    contact_email_placeholder: "Type your email address",
    contact_message_label: "Your Message",
    contact_message_placeholder:
      "Type your message here... (e.g., about a project, about me, or technical questions)",
    contact_send: "Send",
    cta_title: "Ready to Work Together?",
    cta_subtitle:
      "I'm currently open to remote international opportunities. Let's discuss how I can contribute to your team's success.",
    cta_get_in_touch: "Get in Touch",
    cta_download_resume: "Download Resume",
    cta_email: "renatoordnho@gmail.com",

    // Footer
    footer_name: "Renato F. Ordonho",
    footer_description:
      "Fullstack Developer specializing in React, TypeScript, Node.js, and Vue.js. Building scalable web applications with 5+ years of experience. Open to remote international opportunities.",
    footer_nav_title: "Navigation",
    footer_nav_about: "About",
    footer_nav_projects: "Projects",
    footer_nav_blog: "Blog",
    footer_nav_contact: "Contact",
    footer_resources_title: "Resources",
    footer_resources_resume: "Resume",
    footer_resources_cases: "Case Studies",
    footer_resources_tech: "Tech Stack",
    footer_resources_testimonials: "Testimonials",
    footer_copyright: "© 2026 Renato F. Ordonho. All rights reserved.",
    footer_built: "Built with React, Next.js & Tailwind CSS",
  },
  "pt-BR": {
    // Navigation
    menu_home: "Início",
    menu_about: "Sobre",
    menu_companies: "Empresas",
    menu_contact: "Contato",
    menu_tooling: "Ferramentas",
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_blog: "Blog",
    nav_contact: "Contato",
    nav_resume: "Currículo",
    lang: "Idioma",

    // Hero
    title: "Renato F. Ordonho",
    subtitle_one:
      "Desenvolvedor Fullstack (React, TypeScript, Node.js, Vue.js)",
    subtitle_two:
      "Dominando a Arte da Web: Precisão e Expertise na Criação de Experiências Digitais de Alto Desempenho.",
    subtitle_three:
      "Eleve com Precisão: Criando Experiências Web Profissionais com Maestria Técnica.",
    hero_badge: "Aberto a Oportunidades Remotas Internacionais",
    hero_title: "Desenvolvedor Fullstack",
    hero_subtitle:
      "Construindo aplicações web escaláveis com React, TypeScript, Node.js e Vue.js. 5+ anos de experiência entregando 20+ aplicações corporativas, melhorando performance em até 30% e reduzindo codebases legados em 60%. Expertise fullstack desde arquitetura frontend baseada em componentes até APIs REST, bancos de dados e deploy em cloud.",
    hero_view_projects: "Ver Projetos",
    hero_download_resume: "Baixar Currículo",
    stats_years_value: "5+",
    stats_projects_value: "20+",
    stats_tech_value: "15+",
    stats_continents_value: "1",
    stats_years_label: "Anos de Experiência",
    stats_projects_label: "Apps Entregues",
    stats_tech_label: "Tecnologias",
    stats_continents_label: "Continente",

    // About / Tech Stack
    about_title: "Sobre Mim",
    about_text:
      "Desenvolvedor Fullstack com 5+ anos de experiência construindo aplicações web escaláveis usando React, TypeScript, Vue.js, Node.js e NestJS. Especializado em arquitetura baseada em componentes, design de APIs REST, otimização de performance e interfaces data-driven para ambientes corporativos. Histórico comprovado entregando 20+ aplicações corporativas, melhorando performance em até 30% e reduzindo codebases legados em 60%. Experiência com PostgreSQL, MongoDB, CMS headless (Strapi) e features com IA usando LLMs como GPT-4 e Claude, incluindo pipelines RAG e LangChain.",
    techstack_title: "Tech Stack",
    techstack_subtitle:
      "Tecnologias principais que utilizo para construir soluções robustas",
    frontend_title: "Frontend",
    frontend_items:
      "React, Vue.js (2/3), TypeScript, JavaScript (ES6+), HTML5, CSS3, SAPUI5, SAP Fiori",
    frontend_tags: "React,Vue.js,TypeScript,SAPUI5",
    backend_title: "Backend",
    backend_items: "Node.js, NestJS, APIs REST, GraphQL, Express",
    backend_tags: "Node.js,NestJS,APIs REST",
    cloud_title: "Ferramentas & DevOps",
    cloud_items: "Git, CI/CD (GitLab), Agile (Scrum), Figma, AWS",
    cloud_tags: "Git,CI/CD,AWS,Figma",
    database_title: "Database",
    database_items: "PostgreSQL, MongoDB, MariaDB",
    database_tags: "PostgreSQL,MongoDB,MariaDB",

    // Tooling (legacy)
    tooling_title: "Ferramentas",
    tooling_subtitle: "Algumas das ferramentas que mais utilizo",

    // Companies (legacy)
    companies_title: "Empresas",
    companies_subtitle: "Empresas que já colaborei",

    // Projects
    projects_title: "Projetos em Destaque",
    projects_subtitle:
      "Trabalhos selecionados que demonstram expertise técnica e impacto nos negócios",
    projects_view_all: "Ver Todos os Projetos",
    projects_view_case: "Ver Detalhes",
    project1_category: "SAP Corporativo",
    project1_year: "2022–Presente",
    project1_title: "Sistemas SAP Fiori de RH",
    project1_desc:
      "Entreguei 20+ aplicações SAP Fiori (SAPUI5) para sistemas corporativos de RH usados por organizações com 5.000–10.000+ funcionários. Melhorei a performance do frontend em ~30% e reduzi o tamanho do codebase em ~60% através de iniciativas de refatoração. Implementei pipelines CI/CD habilitando 30+ deploys por semana.",
    project1_tags: "SAPUI5,SAP Fiori,TypeScript,CI/CD",
    project2_category: "Fintech",
    project2_year: "2023–2025",
    project2_title: "Plataforma de Gestão de Dívidas",
    project2_desc:
      "Desenvolvimento fullstack com React, Vue.js e Node.js para uma plataforma de gestão de dívidas. Automatizei workflows financeiros, reduzindo trabalho operacional manual em ~70%. Implementei sistemas de notificação (WhatsApp, SMS, email) reduzindo custos de API em ~$150/mês. Construí features para registro automatizado de dívidas, geração de acordos e processamento de pagamentos.",
    project2_tags: "React,Vue.js,Node.js,PostgreSQL",
    project3_category: "IA / SaaS",
    project3_year: "2022",
    project3_title: "Plataforma de Conteúdo com IA",
    project3_desc:
      "Desenvolvimento fullstack com Vue.js, React e Node.js. Construí features com IA usando GPT-3 e estratégias de prompt engineering. Melhorei a performance do backend reduzindo tempos de resposta de API de 17s para 11s. Integrei CMS headless (Strapi) e serviços de terceiros incluindo OpenAI, Google Ads e Facebook Ads. Suporte a ambientes AWS para deploy escalável.",
    project3_tags: "Vue.js,React,Node.js,OpenAI,Strapi",
    project4_category: "Marketing Tech",
    project4_year: "2021–2022",
    project4_title: "Plataforma de Marketing de Influência",
    project4_desc:
      "Desenvolvimento fullstack com React, Vue.js e Node.js para 300+ influenciadores. Melhorei o Google PageSpeed de 65 para 98 através de otimização frontend. Aumentei o tráfego orgânico em ~15% através de melhorias de SEO. Construí interfaces responsivas otimizadas para Core Web Vitals e experiência do usuário.",
    project4_tags: "React,Vue.js,Node.js,SEO",

    // Articles
    articles_title: "Artigos Recentes",
    articles_subtitle:
      "Insights técnicos e melhores práticas de desenvolvimento",
    articles_view_all: "Ver Todos os Artigos",
    article1_date: "Em Breve",
    article1_read: "— min de leitura",
    article1_title: "Construindo Aplicações Fullstack Escaláveis",
    article1_desc:
      "Boas práticas para construir aplicações corporativas com React, Node.js e PostgreSQL, focando em otimização de performance e arquitetura escalável.",
    article1_tags: "React,Node.js,Fullstack",
    article2_date: "Em Breve",
    article2_read: "— min de leitura",
    article2_title: "Integrando Features de IA com Desenvolvimento Fullstack",
    article2_desc:
      "Um guia prático para integrar features com IA usando LLMs como GPT-4 e Claude em aplicações fullstack, incluindo pipelines RAG e LangChain.",
    article2_tags: "IA,LLM,Fullstack",
    article3_date: "Em Breve",
    article3_read: "— min de leitura",
    article3_title: "Otimizando Performance de APIs",
    article3_desc:
      "Técnicas práticas para otimizar tempos de resposta de APIs e queries de banco de dados, reduzindo tempos de resposta de 17s para 11s através de otimização backend.",
    article3_tags: "API,Performance,Node.js",

    // Contact / CTA
    contact_title: "Envie-me uma mensagem!",
    contact_subtitle:
      "Tem alguma pergunta ou proposta, ou só quer dizer olá? Fique à vontade.",
    contact_name_label: "Seu Nome",
    contact_name_placeholder: "Digite seu nome",
    contact_email_label: "Seu Endereço de Email",
    contact_email_placeholder: "Digite seu endereço de email",
    contact_message_label: "Sua Mensagem",
    contact_message_placeholder:
      "Digite sua mensagem aqui... (por exemplo, sobre um projeto, sobre mim ou perguntas técnicas)",
    contact_send: "Enviar",
    cta_title: "Pronto para Trabalhar Juntos?",
    cta_subtitle:
      "Estou atualmente aberto a oportunidades remotas internacionais. Vamos conversar sobre como posso contribuir para o sucesso da sua equipe.",
    cta_get_in_touch: "Entrar em Contato",
    cta_download_resume: "Baixar Currículo",
    cta_email: "renatoordnho@gmail.com",

    // Footer
    footer_name: "Renato F. Ordonho",
    footer_description:
      "Desenvolvedor Fullstack especializado em React, TypeScript, Node.js e Vue.js. Construindo aplicações web escaláveis com 5+ anos de experiência. Aberto a oportunidades remotas internacionais.",
    footer_nav_title: "Navegação",
    footer_nav_about: "Sobre",
    footer_nav_projects: "Projetos",
    footer_nav_blog: "Blog",
    footer_nav_contact: "Contato",
    footer_resources_title: "Recursos",
    footer_resources_resume: "Currículo",
    footer_resources_cases: "Estudos de Caso",
    footer_resources_tech: "Tech Stack",
    footer_resources_testimonials: "Depoimentos",
    footer_copyright: "© 2026 Renato F. Ordonho. Todos os direitos reservados.",
    footer_built: "Construído com React, Next.js & Tailwind CSS",
  },
};
