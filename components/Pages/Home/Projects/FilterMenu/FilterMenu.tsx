import { Dispatch, MouseEventHandler, useState } from "react";
import {
  PROJECT_TAGS,
  PROJECT_TECHNOLOGIES,
} from "../../../../../constants/projectData";
import Button from "../../../../Utilities/Button/Button";
import Modal from "../../../../Modal/Modal";
import FilterDropdown from "./FilterDropdown/FilterDropdown";

type Props = {
  onExitClick?: MouseEventHandler;
  setTag: Dispatch<string>;
  tag: string;
  setTech: Dispatch<string>;
  tech: string;
  hidden?: boolean;
};

const FilterMenu = ({
  hidden,
  onExitClick,
  setTag,
  tag,
  setTech,
  tech,
  ...props
}: Props) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>();

  function updateDropdown(index: number) {
    activeDropdown === index
      ? setActiveDropdown(null)
      : setActiveDropdown(index);
  }

  /*
    TODO: Try and make dropdowns more re-usable

    What if we wanted to filter by something that wasn't tech and project related?
  */
  /*   const dropdowns = [
      {
        words: ["Category", "is"],
        items: ["any", ...PROJECT_TAGS],
        type: "project",
      },
    ]; */

  return (
    <Modal
      hidden={hidden}
      contentPosition="center"
      onBackgroundClick={onExitClick}
    >
      <div className="flex flex-col px-2 py-5 bg-black gap-y-7 z-[100] w-screen max-w-md mx-auto">
        <div className="flex justify-between">
          <div className="text-2xl text-white">Find projects where...</div>
          <button onClick={onExitClick} className="text-base-30">
            X
          </button>
        </div>
        <div className="grid items-center grid-cols-[auto_auto_1fr] gap-y-4">
          <div className="text-base-50">Category</div>
          <div className="px-4 text-base-30">is</div>
          <FilterDropdown
            onClick={() => updateDropdown(0)}
            selectedItem={tag}
            setItem={setTag}
            items={["any", ...PROJECT_TAGS]}
            show={activeDropdown === 0}
          />
          <div className="text-base-50">Project</div>
          <div className="px-4 text-base-30">uses</div>
          <FilterDropdown
            onClick={() => updateDropdown(1)}
            selectedItem={tech}
            setItem={setTech}
            items={["any", ...PROJECT_TECHNOLOGIES]}
            show={activeDropdown === 1}
          />
        </div>
        <Button
          onClick={onExitClick}
          rounded={true}
          className="w-full bg-indigo"
        >
          Finished
        </Button>
      </div>
    </Modal>
  );
};

FilterMenu.defaultProps = {
  hidden: false,
};

export default FilterMenu;
