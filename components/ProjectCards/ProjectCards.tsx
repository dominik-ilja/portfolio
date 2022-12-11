import ProjectCard from "../Cards/ProjectCard/ProjectCard";

type Props = {
  className?: string;
  projects: Project[];
};

const ProjectCards = (props: Props) => {
  return (
    <div className={`grid gap-8 grid-cols-responsive ${props.className || ""}`}>
      {props.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
