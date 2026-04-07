"use client";

interface TechStackProps {
  dictionary: {
    techstack_title: string;
    techstack_subtitle: string;
    frontend_title: string;
    frontend_items: string;
    frontend_tags: string;
    backend_title: string;
    backend_items: string;
    backend_tags: string;
    cloud_title: string;
    cloud_items: string;
    cloud_tags: string;
    database_title: string;
    database_items: string;
    database_tags: string;
  };
}

const techCategories = [
  {
    key: "frontend",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: "backend",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    key: "cloud",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    key: "database",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function TechStack({ dictionary }: TechStackProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-primary to-dark-secondary">
      <div className="content">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{dictionary.techstack_title}</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">{dictionary.techstack_subtitle}</p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category) => (
            <div
              key={category.key}
              className="bg-dark-card border border-white/5 rounded-xl p-6 hover:border-accent/30 transition-all hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {dictionary[`${category.key}_title` as keyof typeof dictionary]}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {dictionary[`${category.key}_items` as keyof typeof dictionary]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {dictionary[`${category.key}_tags` as keyof typeof dictionary]
                  .split(",")
                  .map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-dark-secondary rounded text-xs text-gray-300"
                    >
                      {tag.trim()}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
