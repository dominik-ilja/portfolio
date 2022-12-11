import { projects as PROJECTS_DATA } from "../../constants/projectData";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

type Props = {
  className?: string;
};

const ProjectCards = (props: Props) => {
  return (
    <div className={`grid gap-8 grid-cols-responsive ${props.className || ""}`}>
      {PROJECTS_DATA.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
