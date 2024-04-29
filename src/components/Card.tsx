import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "./Badge";
export function Card(props: {
  children?: ReactNode;
  title: string;
  description: string;
  tags: string[];
  githubName?: string;
}) {
  return (
    <div className="p-4 shadow-md border relative shadow-[#9993] w-[78] rounded-md">
      <h1 className="font-semibold text-xl dark:text-white">{props.title}</h1>
      <p className="dark:text-gray-300 text-sm">{props.description}</p>
      <div className="flex flex-wrap w-full mt-2 gap-2">
        {props.tags.map((tag) => {
          return <Badge className="text-sm">{tag}</Badge>;
        })}
      </div>
      {props.githubName && (
        <a
          target="_blank"
          href={`https://github.com/Maruquitus/${props.githubName}`}
          className="mt-auto absolute bottom-4 right-4 w-[78] duration-300 hover:scale-105 cursor-pointer"
        >
          <FontAwesomeIcon
            className="h-6 dark:text-white mt-auto float-right"
            icon={faGithub}
          />
        </a>
      )}
      {!props.githubName && (
        <abbr title="Repositório privado">
          <FontAwesomeIcon
            className="h-5 dark:text-white mt-auto float-right absolute bottom-4 right-4"
            icon={faLock}
          />
        </abbr>
      )}
    </div>
  );
}
