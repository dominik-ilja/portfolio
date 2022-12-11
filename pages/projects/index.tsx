import Layout from "../../components/Layout/Layout";
import Button from "../../components/Utilities/Button/Button";
import MainTitle from "../../components/Utilities/MainTitle/MainTitle";
import ProjectsSection from "../../components/Pages/Home/Projects/Projects";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

const Projects = () => {
  return (
    <Layout>
      <div className="container px-3 mx-auto">
        <div>
          <MainTitle underline={true} className="mb-12">
            Projects
          </MainTitle>
          <Button rounded={true} className="block mx-auto mb-12 bg-base-10">
            Filter Projects
          </Button>
        </div>
        <ProjectCards />
      </div>
    </Layout>
  );
};

export default Projects;
