import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  tags: string[];
  description: string;
  codeUrl: string;
  demoUrl?: string;
}

const ProjectCard = ({
  imagePath,
  title,
  tags,
  description,
  codeUrl,
  demoUrl,
}: ProjectCardProps) => {
  return (
    <div className="w-64 mb-8 flex flex-col lg:w-96">
      {/* IMAGE PATH */}
      <div className="relative mb-4 w-64 h-36 lg:w-96 lg:h-[216px]">
        <Image src={imagePath} alt={""} fill />
      </div>
      {/* TITLE */}
      <div className="mb-2">
        <h2 className="text-2xl">{title}</h2>
      </div>
      {/* DESCRIPTION */}
      <div className="mb-2">
        <p className="">{description}</p>
      </div>
      {/* TAGS */}
      <div className="mb-4">
        <ul className="flex flex-wrap">
          {tags.map((tag) => {
            return (
              <li className="capitalize text-xs text-textSecondary mr-4 mb-1">
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
      {/* LINKS */}
      <div className="flex space-x-16">
        <Link
          href={`${codeUrl}`}
          target="_blank"
          className="text-blue flex items-center space-x-2"
        >
          <Image
            src={"/code.svg"}
            alt={""}
            width={24}
            height={24}
            className=""
          />
          <p>Code</p>
        </Link>
        {demoUrl ? (
          <Link
            href={`${demoUrl}`}
            target="_blank"
            className="text-blue flex items-center space-x-2"
          >
            <Image
              src={"/start.svg"}
              alt={""}
              width={24}
              height={24}
              className=""
            />
            <p>Demo</p>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
