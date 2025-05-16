import React from "react";

const ProjectCard = ({
  src,
  title,
  description,
  imgClassName = "",
  cardClassName = "",
  titleClassName = "",
  projectLink = "#",
}) => (
  <div className={`bg-background shadow-lg p-4 flex flex-col ${cardClassName}`}>
    <img src={src} alt={title} className={imgClassName} />
    <div className="mt-4 flex flex-col flex-1">
      <h2 className={titleClassName}>{title}</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
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