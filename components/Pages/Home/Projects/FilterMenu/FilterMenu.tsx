import { Dispatch, MouseEventHandler, useRef, useState } from "react";
import {
  PROJECT_TAGS,
  PROJECT_TECHNOLOGIES,
} from "../../../../../constants/projectData";
import Button from "../../../../Utilities/Button/Button";
import FilterDropdown from "./FilterDropdown/FilterDropdown";

type Props = {
  onExitClick?: MouseEventHandler;
  setTag: Dispatch<string>;
  tag: string;
  setTech: Dispatch<string>;
  tech: string;
};

const FilterMenu = (props: Props) => {
  const backgroundRef = useRef(null);

  function backgroundExitClickHandler(e: React.MouseEvent) {
    if (props.onExitClick && backgroundRef.current === e.target) {
      props.onExitClick(e);
    }
  }

  return (
    <div
      ref={backgroundRef}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 px-1 pt-12 bg-opacity-95 bg-base-1"
      onClick={backgroundExitClickHandler}
    >
      <div className="flex flex-col px-2 py-5 bg-black gap-y-7 z-[100] max-w-md mx-auto">
        <div className="flex justify-between">
          <div className="text-2xl text-white">Find projects where...</div>
          <button onClick={props.onExitClick} className="text-base-30">
            X
          </button>
        </div>
        <div className="grid items-center grid-cols-[auto_auto_1fr] gap-y-4">
          <div className="text-base-50">Category</div>
          <div className="px-4 text-base-30">is</div>
          <FilterDropdown
            selectedItem={props.tag}
            setItem={props.setTag}
            items={["any", ...PROJECT_TAGS]}
            capitalize={true}
          />
          <div className="text-base-50">Project</div>
          <div className="px-4 text-base-30">uses</div>
          <FilterDropdown
            selectedItem={props.tech}
            setItem={props.setTech}
            items={["Any", ...PROJECT_TECHNOLOGIES]}
          />
        </div>
        <Button
          onClick={props.onExitClick}
          rounded={true}
          className="w-full bg-indigo"
        >
          Finished
        </Button>
      </div>
    </div>
  );
};

export default FilterMenu;
