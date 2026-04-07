"use client";

interface ArticlesProps {
  dictionary: {
    articles_title: string;
    articles_subtitle: string;
    articles_view_all: string;
    article1_date: string;
    article1_read: string;
    article1_title: string;
    article1_desc: string;
    article1_tags: string;
    article2_date: string;
    article2_read: string;
    article2_title: string;
    article2_desc: string;
    article2_tags: string;
    article3_date: string;
    article3_read: string;
    article3_title: string;
    article3_desc: string;
    article3_tags: string;
  };
}

const articles = [
  {
    key: "article1",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    key: "article2",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    key: "article3",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
];

export default function Articles({ dictionary }: ArticlesProps) {
  return (
    <section id="blog" className="py-20 bg-dark-secondary">
      <div className="content">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{dictionary.articles_title}</h2>
            <p className="mt-2 text-gray-400 max-w-xl">{dictionary.articles_subtitle}</p>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-0 text-accent hover:text-accent-hover flex items-center gap-1 text-sm font-medium transition-colors"
          >
            {dictionary.articles_view_all}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.key}
              className="bg-dark-card border border-white/5 rounded-xl overflow-hidden hover:border-accent/30 transition-all group cursor-pointer"
            >
              {/* Article Image Placeholder */}
              <div className="relative h-40 bg-dark-secondary flex items-center justify-center text-accent/50">
                {article.icon}
              </div>

              {/* Article Content */}
              <div className="p-5">
                {/* Date & Read Time */}
                <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                  <span>{dictionary[`${article.key}_date` as keyof typeof dictionary]}</span>
                  <span>•</span>
                  <span>{dictionary[`${article.key}_read` as keyof typeof dictionary]}</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {dictionary[`${article.key}_title` as keyof typeof dictionary]}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {dictionary[`${article.key}_desc` as keyof typeof dictionary]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {dictionary[`${article.key}_tags` as keyof typeof dictionary]
                    .split(",")
                    .map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-dark-primary rounded text-xs text-gray-400"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
