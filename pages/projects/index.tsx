import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Utilities/Button/Button";
import MainTitle from "../../components/Utilities/MainTitle/MainTitle";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import { projects as PROJECT_DATA } from "../../constants/projectData";

const Projects = () => {
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Layout>
      <div className="container px-3 mx-auto">
        <div className="pb-16">
          <MainTitle underline={true} className="mb-12">
            Projects
          </MainTitle>
          <Button rounded={true} className="block mx-auto bg-base-10">
            Filter Projects
          </Button>
        </div>
        <ProjectCards projects={PROJECT_DATA} className="pb-16" />
      </div>
    </Layout>
  );
};

export default Projects;
