import Button from "../../../Utilities/Button/Button";
import SectionTitle from "../../../Utilities/SectionTitle/SectionTitle";
import ProjectCards from "../../../ProjectCards/ProjectCards";

const Projects = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col px-3 mx-auto gap-y-16">
        <SectionTitle title="Projects" />
        <ProjectCards />
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
