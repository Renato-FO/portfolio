"use client";

interface HeroProps {
  dictionary: {
    hero_badge: string;
    hero_title: string;
    hero_subtitle: string;
    hero_view_projects: string;
    hero_download_resume: string;
    stats_years_value: string;
    stats_projects_value: string;
    stats_tech_value: string;
    stats_continents_value: string;
    stats_years_label: string;
    stats_projects_label: string;
    stats_tech_label: string;
    stats_continents_label: string;
  };
}

const stats = [
  {
    value: "stats_years_value",
    label: "stats_years_label",
    key: "stats_years",
  },
  {
    value: "stats_projects_value",
    label: "stats_projects_label",
    key: "stats_projects",
  },
  { value: "stats_tech_value", label: "stats_tech_label", key: "stats_tech" },
  {
    value: "stats_continents_value",
    label: "stats_continents_label",
    key: "stats_continents",
  },
];

export default function Hero({ dictionary }: HeroProps) {
  return (
    <section id="header" className="pt-32 pb-20">
      <div className="content flex flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-6">
          {dictionary.hero_badge}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
          {dictionary.hero_title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
          {dictionary.hero_subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5"
          >
            {dictionary.hero_view_projects}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="/CV/curriculo-renato-ordonho.pdf"
            download
            className="inline-flex items-center justify-center bg-dark-secondary hover:bg-dark-card text-white px-6 py-3 rounded-lg font-medium transition-all border border-white/10 hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            {dictionary.hero_download_resume}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
          {stats.map((stat) => (
            <div key={stat.key} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white">
                {dictionary[stat.value as keyof typeof dictionary]}
              </span>
              <span className="mt-1 text-sm text-gray-500">
                {dictionary[stat.label as keyof typeof dictionary]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
