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
    <div className="p-4 shadow-md border relative shadow-[#9993] w-[78] rounded-md flex flex-col">
      <div>
        <h1 className="font-semibold text-xl dark:text-white">{props.title}</h1>
        <p className="dark:text-gray-300 text-sm">{props.description}</p>
      </div>
      <div className="flex flex-wrap mt-2 gap-2">
        {props.tags.map((tag, ind) => {
          return (
            <Badge key={ind} className="text-sm">
              {tag}
            </Badge>
          );
        })}
      </div>
      <div className="h-1 w-full" />
      <div className="mt-auto -mb-1">
        {props.githubName ? (
          <a
            target="_blank"
            href={`https://github.com/Maruquitus/${props.githubName}`}
            className="dark:bg-black rounded-full w-8 h-8 duration-300 hover:scale-105 cursor-pointer flex items-center justify-center float-right"
          >
            <FontAwesomeIcon className="h-6 dark:text-white" icon={faGithub} />
          </a>
        ) : (
          <abbr
            title="Repositório privado"
            className="flex h-8 w-8 float-right"
          >
            <FontAwesomeIcon
              className="h-5 dark:text-white m-auto"
              icon={faLock}
            />
          </abbr>
        )}
      </div>
    </div>
  );
}
