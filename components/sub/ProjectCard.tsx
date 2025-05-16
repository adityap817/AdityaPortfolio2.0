import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  src: string;
  title: string;
  description: React.ReactNode;
  imgClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
  projectLink?: string;
};

const ProjectCard = ({
  src,
  title,
  description,
  imgClassName = "",
  cardClassName = "",
  titleClassName = "",
  projectLink = "#",
}: ProjectCardProps) => (
  <div className={`bg-background shadow-lg p-4 flex flex-col ${cardClassName}`}>
    <div className="relative w-full h-[300px]">
      <Image
        src={src}
        alt={title}
        fill
        className={imgClassName}
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover", borderRadius: "0.75rem" }}
        priority={false}
      />
    </div>
    <div className="mt-4 flex flex-col flex-1">
      <h2 className={titleClassName}>{title}</h2>
      <div className="mb-4 text-gray-700 dark:text-gray-300">{description}</div>
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-auto text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
      >
        View Project &rarr;
      </a>
    </div>
  </div>
);

export default ProjectCard;