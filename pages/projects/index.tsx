import Layout from "../../components/Layout/Layout";
import Button from "../../components/Utilities/Button/Button";
import MainTitle from "../../components/Utilities/MainTitle/MainTitle";
import ProjectsSection from "../../components/Pages/Home/Projects/Projects";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

const Projects = () => {
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
        <ProjectCards className="pb-16" />
      </div>
    </Layout>
  );
};

export default Projects;
