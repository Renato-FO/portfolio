import {
  HtmlHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import api from "./api/locales/route";
import { Dictionary } from "./api/locales/types";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Companies from "@/components/Companies";
import Contact from "@/components/Contact";
import portuguese from "@/images/flag_br.svg";
import english from "@/images/flag_usa.svg";
import Image from "next/image";

interface Params {
  locale: string;
}

interface Props {
  locale: string;
  dictionary: Dictionary;
}

interface MenuItem {
  displayName: string;
  id: string;
  bgMenu: string;
  bgClose: string;
  background: string;
}

type CustomHtml = HTMLElement | null;

export default function Home({ locale, dictionary }: Props) {
  const [opened, setOpened] = useState(false),
    [menuBG, setMenuBG] = useState("#66FF66"),
    [closeBG, setCloseBG] = useState("#001F3F"),
    [background, setBackground] = useState("white"),
    [selectedPage, setSelectedPage] = useState("header"),
    [scrolling, setScrolling] = useState(false),
    menu = [
      {
        displayName: dictionary.menu_home,
        id: "header",
        bgMenu: "white",
        bgClose: "#001F3F",
        background: "#66FF66",
      },
      {
        displayName: dictionary.menu_about,
        id: "about",
        bgMenu: "#001F3F",
        bgClose: "#66FF66",
        background: "#001F3F",
      },
      {
        displayName: dictionary.menu_projects,
        id: "projects",
        bgMenu: "white",
        bgClose: "#001F3F",
        background: "#66FF66",
      },
      {
        displayName: dictionary.menu_companies,
        id: "companies",
        bgMenu: "#001F3F",
        bgClose: "#66FF66",
        background: "#001F3F",
      },
      {
        displayName: dictionary.menu_contact,
        id: "contact",
        bgMenu: "white",
        bgClose: "#001F3F",
        background: "#66FF66",
      },
    ],
    pages = ["header", "about", "projects", "companies", "contact"],
    router = useRouter();

  const handleOpen = () => {
    setOpened(!opened);
  };

  const handleChangeLocale = () => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, {
      locale: locale === "en-US" ? "pt-BR" : "en-US",
    });
  };

  const selectPage = (
    id: any,
    background: any,
    close: any,
    menuBackground: any
  ) => {
    if (typeof window !== "undefined") {
      const divAlvo: CustomHtml = document.getElementById(id);
      if (divAlvo) {
        setScrolling(true);
        window.scrollTo({
          top: divAlvo.offsetTop,
          behavior: "smooth",
        });

        setMenuBG(background);
        setCloseBG(close);
        setBackground(menuBackground);
        setSelectedPage(id);

        setTimeout(() => {
          setScrolling(false);
        }, 500);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      pages.forEach((page, index) => {
        var elementTop = document.getElementById(page)?.offsetTop;
        var scroll = window.scrollY;
        var object: MenuItem = menu[index];

        if (elementTop === scroll) {
          setSelectedPage(object.id);
          setCloseBG(object.bgClose);
          setMenuBG(object.background);
          setBackground(object.bgMenu);
        }
      });
    }, 500);

    window.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        if (!scrolling) {
          setScrolling(true);
          const index = pages.indexOf(selectedPage);
          if (e.deltaY > 0) {
            if (index < 4) {
              selectPage(
                menu[index + 1].id,
                menu[index + 1].background,
                menu[index + 1].bgClose,
                menu[index + 1].bgMenu
              );
            }
          } else if (e.deltaY < 0) {
            if (index > 0) {
              selectPage(
                menu[index - 1].id,
                menu[index - 1].background,
                menu[index - 1].bgClose,
                menu[index - 1].bgMenu
              );
            }
          }
        }
        setTimeout(() => {
          setScrolling(false);
        }, 500);
      },
      {
        passive: false,
      }
    );
  }, [scrolling]);

  return (
    <main className="flex min-h-screen flex-col items-center relative overflow-hidden">
      <div className="content flex justify-end w-full relative">
        <div className="flex fixed w-full content">
          <div
            style={{ "--background-menu": background } as React.CSSProperties}
            className={`menu p-4 pt-14 lg:pt-24 gap-8 items-center   ${
              opened ? "openedMenu flex flex-col" : "hidden"
            }`}
          >
            {menu.map((item) => {
              return (
                <div className="w-full text-center" key={item.displayName}>
                  <button
                    onClick={() =>
                      selectPage(
                        item.id,
                        item.background,
                        item.bgClose,
                        item.bgMenu
                      )
                    }
                    style={
                      {
                        color: closeBG,
                        "--color-text": menuBG,
                        "--background-text": closeBG,
                      } as React.CSSProperties
                    }
                    className="px-2 w-min mx-auto rounded-sm transition-all ease-in cursor-pointer font-semibold menuItem"
                  >
                    {item.displayName}
                  </button>
                </div>
              );
            })}
            <button
              onClick={handleChangeLocale}
              className="px-2 mx-auto rounded-sm transition-all ease-in cursor-pointer font-semibold menuItem flex items-center justify-center gap-2 text-center"
              style={
                {
                  color: closeBG,
                  "--color-text": menuBG,
                  "--background-text": closeBG,
                } as React.CSSProperties
              }
            >
              {locale === "en-US" ? "Language" : "Idioma"}
              <Image
                alt={locale}
                src={locale === "en-US" ? english : portuguese}
                height={25}
              />
            </button>
            <p className="text-xs mt-auto flex text-gray-500">
              Developed with Next.JS
            </p>
          </div>
        </div>
        <div style={{ zIndex: 2000 }} className="flex fixed w-full content">
          <button
            onClick={handleOpen}
            style={
              {
                zIndex: 1000,
                "--bg-color": menuBG,
                "--close-bg": closeBG,
              } as React.CSSProperties
            }
            className={`absolute top-0 mt-6 flex flex-col gap-2 flex-wrap-reverse right-0 ${
              opened ? "opened" : ""
            }`}
          >
            <div className="menu1"></div>
            <div className="menu2"></div>
            <div className="menu3"></div>
          </button>
        </div>
      </div>
      <Header
        title={dictionary.title}
        subtitle_one={dictionary.subtitle_one}
        subtitle_two={dictionary.subtitle_two}
        subtitle_three={dictionary.subtitle_three}
      />
      <About
        about_title={dictionary.about_title}
        about_text={dictionary.about_text}
      />
      <Projects
        title={dictionary.projects_title}
        subtitle={dictionary.projects_subtitle}
      />
      <Companies
        title={dictionary.companies_title}
        subtitle={dictionary.companies_subtitle}
      />
      <Contact
        title={dictionary.contact_title}
        subtitle={dictionary.contact_subtitle}
        contact_name_label={dictionary.contact_name_label}
        contact_name_placeholder={dictionary.contact_name_placeholder}
        contact_email_label={dictionary.contact_email_label}
        contact_email_placeholder={dictionary.contact_email_placeholder}
        contact_message_label={dictionary.contact_message_label}
        contact_message_placeholder={dictionary.contact_message_placeholder}
        contact_send={dictionary.contact_send}
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
