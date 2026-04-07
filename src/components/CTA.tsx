"use client";

interface CTAProps {
  dictionary: {
    cta_title: string;
    cta_subtitle: string;
    cta_get_in_touch: string;
    cta_download_resume: string;
    cta_email: string;
  };
}

export default function CTA({ dictionary }: CTAProps) {
  return (
    <section id="contact" className="py-20 bg-dark-primary">
      <div className="content">
        <div className="bg-gradient-to-r from-accent to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {dictionary.cta_title}
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            {dictionary.cta_subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${dictionary.cta_email}`}
              className="inline-flex items-center justify-center bg-white text-accent hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5"
            >
              {dictionary.cta_get_in_touch}
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
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5"
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
              {dictionary.cta_download_resume}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
