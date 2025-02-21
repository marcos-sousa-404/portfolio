"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import projects from "@/constants/projects";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    const handleDarkModeChange = (event: any) => {
      setDark(event.matches);
    };

    setDark(prefersDarkMode.matches);

    prefersDarkMode.addEventListener("change", handleDarkModeChange);

    return () => {
      prefersDarkMode.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (dark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-black w-full h-full duration-300">
      <header className="shadow-lg bg-white dark:bg-black duration-300 transition-all w-full z-10 shadow-purple-500/15 h-16 flex fixed">
        <button
          onClick={() => setDark(!dark)}
          className="rounded-md  text-2xl h-9 w-9 my-auto ml-4 hover:scale-105 translate-y-0.5 duration-300 transition-all"
        >
          <FontAwesomeIcon
            className="text-gray-600 dark:text-gray-200 h-6 m-auto duration-300"
            icon={dark ? faMoon : faSun}
          />
        </button>
        <div className="ml-auto mr-4 my-auto flex gap-4">
          <a
            target="_blank"
            href="https://github.com/marcos-sousa-404"
            className="font-medium text-sm text-gray-800 dark:text-gray-100 my-auto flex hover:scale-105 duration-300 cursor-pointer"
          >
            <FontAwesomeIcon
              className="h-5 text-xl my-auto mr-1"
              icon={faGithub}
            />
            Github
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/marcos-sousa-39aaa6262/"
            className="font-medium text-sm text-gray-800 dark:text-gray-100 my-auto flex hover:scale-105 duration-300 cursor-pointer"
          >
            <FontAwesomeIcon
              className="h-5 text-xl my-auto mr-1"
              icon={faLinkedin}
            />
            LinkedIn
          </a>
        </div>
      </header>

      <main className="w-full h-full flex flex-col">
        <div className="mt-16"></div>
        <section className="flex sm:flex-row flex-col w-full my-10">
          <img
            className="rounded-full mx-auto sm:ml-8 mb-4 object-cover aspect-square sm:my-auto h-56 sm:h-72 shadow-lg shadow-[#9993]"
            src="foto.jpg"
          />
          <div className="mx-auto sm:ml-4 w-full">
            <div className="w-10/12 sm:w-full mx-8 sm:ml-0">
              <Badge>Sobre mim 🧐</Badge>
            </div>
            <h1 className="font-bold w-10/12 sm:w-full mx-8 sm:mx-0 text-4xl dark:text-white duration-300">
              Marcos Sousa
            </h1>
            <h2 className="dark:text-white font-medium mx-8 sm:mx-0 w-10/12 sm:w-full duration-300">
              Desenvolvedor Web e Mobile
            </h2>
            <ul className="w-10/12 mx-8 sm:mx-0 md:w-2/3 dark:text-white text-md mt-2">
              <li>
                📖 Atualmente cursando Sistemas de Informação na Universidade 7
                de Setembro.
              </li>
              <li>🧑‍🎓 Técnico em Informática pela EEEP Edson Queiroz.</li>
              <li>
                🌐 Me identifico principalmente com desenvolvimento Web e
                Mobile.
              </li>
              <li>
                🍃 Estagiário na{" "}
                <strong>
                  <a target="_blank" href="https://delfos.energy">
                    Delfos Energy
                  </a>
                </strong>
                .
              </li>
              <li>✉️ Email para contato: marcospauloda.s.s@gmail.com.</li>
            </ul>
          </div>
        </section>
        <hr className="solid block border-b-[0.5] border-purple-400 w-4/5 mx-auto" />
        <section className="flex w-full my-10">
          <div className="mx-8">
            <Badge className="">🖥️ Portfólio</Badge>
            <h1 className="font-bold text-4xl dark:text-white duration-300">
              Meus projetos
            </h1>
            <div className="mt-4 grid grid-cols-1 pb-4 sm:pb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {projects.map((project, ind) => (
                <Card key={ind} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
