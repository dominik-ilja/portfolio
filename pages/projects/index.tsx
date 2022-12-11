import { MouseEventHandler, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Utilities/Button/Button";
import MainTitle from "../../components/Utilities/MainTitle/MainTitle";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import { PROJECTS } from "../../constants/projectData";

const FilterMenu = (props: { exitClickHandler?: MouseEventHandler }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 px-1 pt-12 bg-opacity-95 bg-base-1">
      <div className="flex flex-col px-2 py-5 bg-black gap-y-7 z-[100]">
        <div className="flex justify-between">
          <div className="text-2xl text-white">Find projects where...</div>
          <button onClick={props.exitClickHandler} className="text-base-30">
            X
          </button>
        </div>
        <div className="grid items-center grid-cols-[auto_auto_1fr] gap-y-4">
          <div className="text-base-50">Category</div>
          <div className="px-4 text-base-30">is</div>
          <div className="p-2 border text-base-30 border-base-30">Design</div>
          <div className="text-base-50">Project</div>
          <div className="px-4 text-base-30">uses</div>
          <div className="p-2 border text-base-30 border-base-30">React</div>
        </div>
        <div className="flex gap-x-4">
          <Button rounded={true} className="w-full bg-indigo">
            Confirm
          </Button>
          <Button
            onClick={props.exitClickHandler}
            rounded={true}
            className="w-full bg-red bg-"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<TagOptions | "">("");
  const [showFilter, setShowFilter] = useState(false);

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
            <FilterMenu exitClickHandler={() => setShowFilter(false)} />
          )}
        </div>
        <ProjectCards projects={PROJECTS} className="pb-16" />
      </div>
    </Layout>
  );
};

export default Projects;
