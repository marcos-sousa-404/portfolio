import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "./Badge";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Card(props: CardProps) {
  const { description, icon, title, tags, githubName, linkedInURL } = props;

  return (
    <div className="p-4 shadow-md border border-purple-400 relative shadow-purple-500/10 w-[78] rounded-md flex flex-col">
      <div>
        <div className="flex">
          <FontAwesomeIcon
            className="dark:text-white text-xl my-auto mr-2"
            icon={icon}
          />
          <h1 className="font-semibold text-xl dark:text-white">{title}</h1>
        </div>
        <p className="dark:text-gray-300 text-sm">{description}</p>
      </div>
      <div className="flex flex-wrap mt-2 gap-2">
        {tags.map((tag, ind) => {
          return (
            <Badge key={ind} className="text-sm">
              {tag}
            </Badge>
          );
        })}
      </div>
      <div className="h-1 w-full" />
      <div className="mt-auto -mb-1">
        {githubName && (
          <a
            target="_blank"
            href={`https://github.com/marcos-sousa-404/${githubName}`}
            className="dark:bg-black rounded-full w-8 h-8 duration-300 hover:scale-105 cursor-pointer flex items-center justify-center float-right"
          >
            <FontAwesomeIcon className="h-6 dark:text-white" icon={faGithub} />
          </a>
        )}

        {linkedInURL && (
          <a
            target="_blank"
            href={linkedInURL}
            className="dark:bg-black rounded-full w-8 h-8 duration-300 hover:scale-105 cursor-pointer flex items-center justify-center float-right"
          >
            <FontAwesomeIcon
              className="h-6 dark:text-white"
              icon={faLinkedin}
            />
          </a>
        )}
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  icon: IconDefinition;
  children?: ReactNode;
  githubName?: string;
  linkedInURL?: string;
}
