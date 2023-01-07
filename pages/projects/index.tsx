import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Utilities/Button/Button";
import MainTitle from "../../components/Utilities/Titles/MainTitle/MainTitle";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import { PROJECTS } from "../../constants/projectData";
import FilterMenu from "../../components/Pages/Home/Projects/FilterMenu/FilterMenu";
import Section from "../../components/Utilities/Section/Section";
import Container from "../../components/Container/Container";

const Projects = () => {
  const [projectList, setProjectList] = useState(PROJECTS);
  const [showFilter, setShowFilter] = useState(false);
  const [tag, setTag] = useState<string>("any");
  const [tech, setTech] = useState<string>("any");

  useEffect(() => {
    setProjectList(
      PROJECTS.filter((project) => {
        const tagFilter = tag.toLowerCase() === "any" || project.tag === tag;
        const techFilter =
          tech.toLowerCase() === "any" || project.stack.includes(tech);

        return tagFilter && techFilter;
      })
    );
  }, [tag, tech]);

  return (
    <>
      <Layout>
        <Container>
          <Section className="pt-0">
            <MainTitle underline={true} className="mb-12">
              Projects
            </MainTitle>
            <Button
              onClick={() => setShowFilter(true)}
              rounded={true}
              className="block mx-auto bg-base-10"
            >
              Filter Projects
            </Button>
          </Section>
          <ProjectCards projects={projectList} className="pb-16" />
        </Container>
      </Layout>

      <FilterMenu
        onExitClick={() => setShowFilter(false)}
        setTag={setTag}
        tag={tag}
        setTech={setTech}
        tech={tech}
        hidden={!showFilter}
      />
    </>
  );
};

export default Projects;
