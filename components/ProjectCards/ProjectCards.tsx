import ProjectCard from "../Cards/ProjectCard/ProjectCard";

type Props = {
  className?: string;
  projects: Project[];
};

const ProjectCards = (props: Props) => {
  return (
    <div className={`grid gap-9 grid-cols-resp-fill ${props.className || ""}`}>
      {props.projects.map((project, idx) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
