import clsx from "clsx";
import { Dispatch, MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../../../../../utilities/utilities";
import Chevron from "../../../../../Utilities/Icons/Chevron/Chevron";

type Props = {
  selectedItem: string;
  setItem: Dispatch<string>;
  items: string[];
  capitalize?: boolean;
  onClick?: MouseEventHandler;
  show?: boolean;
};

const FilterDropdown = (props: Props) => {
  const selectedItem = props.selectedItem
    ? props.capitalize
      ? capitalize(props.selectedItem)
      : props.selectedItem
    : "Any";

  return (
    <div onClick={props.onClick} className="relative">
      <button className="flex items-center justify-between w-full p-2 border text-base-30 border-base-30">
        {selectedItem}
        <Chevron />
      </button>
      <ul
        className={twMerge(
          "border border-base-30 absolute left-0 top-full bg-black right-0 z-10 max-h-[50vh] overflow-y-scroll",
          clsx({ hidden: !props.show })
        )}
      >
        {props.items.map((item) => (
          <li key={item} className="border-b border-base-30 last:border-b-0">
            <button
              onClick={() => props.setItem(item)}
              className="w-full py-2 text-center"
            >
              {props.capitalize ? capitalize(item) : item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FilterDropdown.defaultProps = {
  show: false,
  capitalize: true,
};

export default FilterDropdown;
