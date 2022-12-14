import Button from "../../../Utilities/Button/Button";
import SectionTitle from "../../../Utilities/Titles/SectionTitle/SectionTitle";
import ProjectCards from "../../../ProjectCards/ProjectCards";
import { PROJECTS } from "../../../../constants/projectData";
import Section from "../../../Utilities/Section/Section";
import Container from "../../../Container/Container";

const Projects = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-y-16">
        <SectionTitle title="Projects" />
        <ProjectCards projects={PROJECTS} />
        <Button
          rounded={true}
          internalLink="/projects"
          className="self-center bg-red"
        >
          View All Projects
        </Button>
      </Container>
    </Section>
  );
};

export default Projects;
