"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";

export default function Home() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="bg-white dark:bg-black w-full h-full duration-300">
      <header className="shadow-lg bg-white dark:bg-black duration-300 transition-all w-full z-10 shadow-[#9993] h-16 flex fixed">
        <button
          onClick={() => darkModeHandler()}
          className="rounded-md h-9 w-9 my-auto ml-4 hover:scale-105 translate-y-0.5 duration-300 transition-all"
        >
          <FontAwesomeIcon
            className="text-gray-600 dark:text-gray-200 h-6 m-auto duration-300"
            icon={dark ? faMoon : faSun}
          />
        </button>
        <div className="ml-auto mr-4 my-auto flex gap-4">
          <a
            target="_blank"
            href="https://github.com/Maruquitus"
            className="font-medium text-sm text-gray-800 dark:text-gray-100 my-auto flex hover:scale-105 duration-300 cursor-pointer"
          >
            <FontAwesomeIcon className="h-5 my-auto mr-1" icon={faGithub} />
            Github
          </a>
          <a
            target="_blank"
            href="https://instagram.com/Maruquiturus"
            className="font-medium text-sm text-gray-800 dark:text-gray-100 my-auto flex hover:scale-105 duration-300 cursor-pointer"
          >
            <FontAwesomeIcon className="h-5 my-auto mr-1" icon={faInstagram} />
            Instagram
          </a>
        </div>
      </header>

      <main className="w-full h-full flex flex-col">
        <div className="mt-16"></div>
        <section className="flex sm:flex-row flex-col w-full my-10">
          <img
            className="rounded-full mx-auto sm:ml-8 mb-4 sm:my-auto h-56 sm:h-72 shadow-lg shadow-[#9993]"
            src="foto.png"
          />
          <div className="mx-auto sm:ml-4">
            <div className="w-10/12 sm:w-full mx-8 sm:ml-0">
              <Badge>Sobre mim 🧐</Badge>
            </div>
            <h1 className="font-bold w-10/12 sm:w-full mx-8 sm:mx-0 text-4xl dark:text-white duration-300">
              Marcos Paulo
              <br /> da Silva Sousa
            </h1>
            <h2 className="dark:text-white font-medium mx-8 sm:mx-0 w-10/12 sm:w-full duration-300">
              Desenvolvedor Web e Mobile
            </h2>
            <ul className="w-10/12 mx-8 sm:mx-0 md:w-2/3 dark:text-white text-md mt-2">
              <li>
                📖 Estudante do 3º Ano Técnico em Informática da EEEP Edson
                Queiroz.
              </li>
              <li>🧒 Apaixonado por programação desde o 7º ano.</li>
              <li>
                🌐 Me identifico principalmente com desenvolvimento Web e
                Mobile.
              </li>
              <li>
                🔭 Desenvolvedor do projeto ganhador da etapa regional do Ceará
                Científico 2023 que utiliza aprendizado de máquina, React
                Native, AWS e Python,{" "}
                <a
                  className="font-semibold"
                  target="_blank"
                  href="https://corraut.com.br"
                >
                  CorrAut
                </a>
                .
              </li>
            </ul>
          </div>
        </section>
        <hr className="solid block border-b-[0.5] border-gray-500 w-4/5 mx-auto" />
        <section className="flex w-full my-10">
          <div className="mx-8">
            <Badge className="">🖥️ Portfólio</Badge>
            <h1 className="font-bold text-4xl dark:text-white duration-300">
              Meus projetos
            </h1>
            <div className="mt-4 grid grid-cols-1 pb-4 sm:pb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card
                title="CorrAut 2022"
                description="Criação de um sistema desktop para a correção automática de gabaritos baseado no método da Cascata de Haar. Projeto vencedor da área de TICs da XIII feira de ciências e cultura da EEEP Edson Queiroz."
                tags={["Python", "OpenCV", "Pillow", "PyQt6"]}
                githubName="CorrAut-Antigo"
              />
              <Card
                title="Jogo Educativo de Verbos em Espanhol"
                description="Aplicação com interface interativa focada em verbos espanhóis terminados em AR, oferecendo explicações sobre conjugações, pronomes pessoais e questões para prática."
                tags={["HTML / CSS / JS", "Python", "Flask", "JSON"]}
                githubName="Trabalho-de-Espanhol"
              />
              <Card
                title="Projeto Cifra"
                description="Jogo que auxilia no estudo de música através de uma aplicação de terminal e conexão com midi. Contém várias funções para trabalhar com conceitos de teoria musical e reconhecimento através de midi."
                tags={["Python", "Selenium", "Pygame Midi", "Colorama"]}
                githubName="ProjetoCifra"
              />
              <Card
                title="CorrAut 2023"
                description="Sistema que automatiza a correção de gabaritos e monitora a frequência dos estudantes por meio de um website e um aplicativo móvel. Vencedor da área de TICs da XIV feira de ciências e cultura da EEEP Edson Queiroz."
                tags={[
                  "HTML / CSS / JS",
                  "React Native",
                  "Firebase",
                  "AWS",
                  "Python",
                  "Ultralytics",
                  "Django",
                ]}
              />
              <Card
                title="Chat Web"
                description="Consiste em um site onde os usuários podem fazer criar contas, fazer login e trocar mensagens, contando com confirmações de leitura e fotos de perfil. "
                tags={["JS", "React", "Firebase", "Next.js", "Tailwind CSS"]}
                githubName="Chat-web"
              />
              <Card
                title="Corretor"
                description="Corretor automatizado de gabaritos de 20 questões padronizados, versão otimizada do corretor do CorrAut."
                tags={["Python", "Ultralytics"]}
                githubName="Corretor"
              />
              <Card
                title="Weather Web App"
                description="Aplicação de previsão do clima simples, feita para aprender svelte. Mostra os dados do clima atual da cidade escolhida, além de previsões para os próximos horários e 7 dias da semana."
                tags={[
                  "TS",
                  "Svelte",
                  "Svelte Kit",
                  "Shadcn Svelte",
                  "Tailwind CSS",
                ]}
                githubName="weather-web-app"
              />
              <Card
                title="Escola Transparente"
                description="Plataforma para a denúncia da infraestrutura precária de escolas. Os usuários podem criar reclamações que serão visualizadas no perfil da escola e na página inicial do site. "
                tags={["TS", "React", "Node.js", "MongoDB", "Tailwind CSS"]}
                githubName="escola-transparente"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
