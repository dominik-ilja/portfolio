import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Utilities/Button/Button";
import MainTitle from "../../components/Utilities/MainTitle/MainTitle";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import { PROJECTS } from "../../constants/projectData";
import FilterMenu from "../../components/Pages/Home/Projects/FilterMenu/FilterMenu";

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
    <Layout>
      <div className="container px-3 mx-auto">
        <div className="pb-16">
          <MainTitle underline={true} className="mb-12">
            Projects
          </MainTitle>
          <Button
            onClick={() => setShowFilter(!showFilter)}
            rounded={true}
            className="block mx-auto bg-base-10"
          >
            Filter Projects
          </Button>

          {showFilter && (
            <FilterMenu
              onExitClick={() => setShowFilter(false)}
              setTag={setTag}
              tag={tag}
              setTech={setTech}
              tech={tech}
            />
          )}
        </div>
        <ProjectCards projects={projectList} className="pb-16" />
      </div>
    </Layout>
  );
};

export default Projects;
