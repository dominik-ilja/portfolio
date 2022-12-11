import { Dispatch, MouseEventHandler, useRef, useState } from "react";
import { PROJECT_TAGS } from "../../../../../constants/projectData";
import { capitalize } from "../../../../../utilities/utilities";
import Button from "../../../../Utilities/Button/Button";
import Chevron from "../../../../Utilities/Icons/Chevron/Chevron";

type Props = {
  onExitClick?: MouseEventHandler;
  setTag: Dispatch<string>;
  tag: string | null;
  // setTech: Dispatch<string | null>;
};

const FilterMenu = (props: Props) => {
  const [show, setShow] = useState(false);
  const backgroundRef = useRef(null);

  function backgroundExitClickHandler(e: React.MouseEvent) {
    if (props.onExitClick && backgroundRef.current === e.target) {
      props.onExitClick(e);
    }
  }
  function dropdownClickHandler() {}

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
          <div className="relative">
            <button
              className="flex items-center justify-between w-full p-2 border text-base-30 border-base-30"
              onClick={() => setShow(!show)}
            >
              {props.tag ? capitalize(props.tag) : "Any"}
              <Chevron />
            </button>
            <ul
              className={`${
                show ? "" : "hidden"
              } border border-base-30 absolute left-0 top-full bg-black right-0 z-10`}
            >
              {["any", ...PROJECT_TAGS].map((tag) => (
                <li
                  key={tag}
                  className="border-b border-base-30 last:border-b-0"
                >
                  <button
                    onClick={() => props.setTag(tag)}
                    className="w-full py-2 text-center"
                  >
                    {capitalize(tag)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-base-50">Project</div>
          <div className="px-4 text-base-30">uses</div>
          <button className="flex items-center justify-between p-2 border text-base-30 border-base-30 ">
            React
            <Chevron />
          </button>
        </div>
        <div className="flex gap-x-4">
          <Button rounded={true} className="w-full bg-indigo">
            Confirm
          </Button>
          <Button
            onClick={props.onExitClick}
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

export default FilterMenu;
