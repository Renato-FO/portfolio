import { useRouter } from "next/router";
import api from "./api/locales/route";
import { Dictionary } from "./api/locales/types";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

interface Params {
  locale: string;
}

interface Props {
  locale: string;
  dictionary: Dictionary;
}

export default function Home({ locale, dictionary }: Props) {
  const router = useRouter();

  const handleChangeLocale = () => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, {
      locale: locale === "en-US" ? "pt-BR" : "en-US",
    });
  };

  return (
    <main className="min-h-screen bg-dark-primary">
      <Navbar
        locale={locale}
        handleChangeLocale={handleChangeLocale}
        dictionary={{
          nav_about: dictionary.nav_about,
          nav_projects: dictionary.nav_projects,
          nav_blog: dictionary.nav_blog,
          nav_contact: dictionary.nav_contact,
          nav_resume: dictionary.nav_resume,
          lang: dictionary.lang,
        }}
      />
      <Hero
        dictionary={{
          hero_badge: dictionary.hero_badge,
          hero_title: dictionary.hero_title,
          hero_subtitle: dictionary.hero_subtitle,
          hero_view_projects: dictionary.hero_view_projects,
          hero_download_resume: dictionary.hero_download_resume,
          stats_years_value: dictionary.stats_years_value,
          stats_projects_value: dictionary.stats_projects_value,
          stats_tech_value: dictionary.stats_tech_value,
          stats_continents_value: dictionary.stats_continents_value,
          stats_years_label: dictionary.stats_years_label,
          stats_projects_label: dictionary.stats_projects_label,
          stats_tech_label: dictionary.stats_tech_label,
          stats_continents_label: dictionary.stats_continents_label,
        }}
      />
      <TechStack
        dictionary={{
          techstack_title: dictionary.techstack_title,
          techstack_subtitle: dictionary.techstack_subtitle,
          frontend_title: dictionary.frontend_title,
          frontend_items: dictionary.frontend_items,
          frontend_tags: dictionary.frontend_tags,
          backend_title: dictionary.backend_title,
          backend_items: dictionary.backend_items,
          backend_tags: dictionary.backend_tags,
          cloud_title: dictionary.cloud_title,
          cloud_items: dictionary.cloud_items,
          cloud_tags: dictionary.cloud_tags,
          database_title: dictionary.database_title,
          database_items: dictionary.database_items,
          database_tags: dictionary.database_tags,
        }}
      />
      <Projects
        dictionary={{
          projects_title: dictionary.projects_title,
          projects_subtitle: dictionary.projects_subtitle,
          projects_view_all: dictionary.projects_view_all,
          projects_view_case: dictionary.projects_view_case,
          project1_category: dictionary.project1_category,
          project1_year: dictionary.project1_year,
          project1_title: dictionary.project1_title,
          project1_desc: dictionary.project1_desc,
          project1_tags: dictionary.project1_tags,
          project2_category: dictionary.project2_category,
          project2_year: dictionary.project2_year,
          project2_title: dictionary.project2_title,
          project2_desc: dictionary.project2_desc,
          project2_tags: dictionary.project2_tags,
          project3_category: dictionary.project3_category,
          project3_year: dictionary.project3_year,
          project3_title: dictionary.project3_title,
          project3_desc: dictionary.project3_desc,
          project3_tags: dictionary.project3_tags,
          project4_category: dictionary.project4_category,
          project4_year: dictionary.project4_year,
          project4_title: dictionary.project4_title,
          project4_desc: dictionary.project4_desc,
          project4_tags: dictionary.project4_tags,
        }}
      />
      <Articles
        dictionary={{
          articles_title: dictionary.articles_title,
          articles_subtitle: dictionary.articles_subtitle,
          articles_view_all: dictionary.articles_view_all,
          article1_date: dictionary.article1_date,
          article1_read: dictionary.article1_read,
          article1_title: dictionary.article1_title,
          article1_desc: dictionary.article1_desc,
          article1_tags: dictionary.article1_tags,
          article2_date: dictionary.article2_date,
          article2_read: dictionary.article2_read,
          article2_title: dictionary.article2_title,
          article2_desc: dictionary.article2_desc,
          article2_tags: dictionary.article2_tags,
          article3_date: dictionary.article3_date,
          article3_read: dictionary.article3_read,
          article3_title: dictionary.article3_title,
          article3_desc: dictionary.article3_desc,
          article3_tags: dictionary.article3_tags,
        }}
      />
      <CTA
        dictionary={{
          cta_title: dictionary.cta_title,
          cta_subtitle: dictionary.cta_subtitle,
          cta_get_in_touch: dictionary.cta_get_in_touch,
          cta_download_resume: dictionary.cta_download_resume,
          cta_email: dictionary.cta_email,
        }}
      />
      <Footer
        dictionary={{
          footer_name: dictionary.footer_name,
          footer_description: dictionary.footer_description,
          footer_nav_title: dictionary.footer_nav_title,
          footer_nav_about: dictionary.footer_nav_about,
          footer_nav_projects: dictionary.footer_nav_projects,
          footer_nav_blog: dictionary.footer_nav_blog,
          footer_nav_contact: dictionary.footer_nav_contact,
          footer_resources_title: dictionary.footer_resources_title,
          footer_resources_resume: dictionary.footer_resources_resume,
          footer_resources_cases: dictionary.footer_resources_cases,
          footer_resources_tech: dictionary.footer_resources_tech,
          footer_resources_testimonials:
            dictionary.footer_resources_testimonials,
          footer_copyright: dictionary.footer_copyright,
          footer_built: dictionary.footer_built,
        }}
      />
    </main>
  );
}

export const getStaticProps = async (params: Params) => {
  const { locale } = params;
  const dictionary = await api.dictionaries.fetch(locale);

  return {
    props: {
      locale,
      dictionary,
    },
    revalidate: false,
  };
};
