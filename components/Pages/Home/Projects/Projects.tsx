import { projects as PROJECTS_DATA } from "../../../../constants/projectData";
import Button from "../../../Utilities/Button/Button";
import ProjectCard from "../../../Cards/ProjectCard/ProjectCard";
import SectionTitle from "../../../Utilities/SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col px-3 mx-auto gap-y-16">
        <SectionTitle title="Projects" />
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <Button
          rounded={true}
          internalLink="/projects"
          className="self-center mt-16 bg-red"
        >
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;
