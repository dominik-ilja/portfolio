import { MouseEventHandler } from "react";
import styles from "./HeaderToggle.module.scss";

type Props = {
  onClick: MouseEventHandler;
  open: boolean;
};

const HeaderToggle = (props: Props) => {
  let line = "absolute right-0 bg-white h-[3px] transition-all";
  let line1: string;
  let line2: string;
  let line3: string;

  if (props.open) {
    line += " w-full";
    line1 = "rotate-[135deg]";
    line2 = "scale-0";
    line3 = "-rotate-[135deg]";
  } else {
    line1 = "w-full -translate-y-2";
    line2 = "w-[80%]";
    line3 = "w-[90%] translate-y-2";
  }

  return (
    <button
      onClick={props.onClick}
      className={`items-center cursor-pointer flex mt-3 w-8 h-8 relative`}
    >
      <div className={`${line} ${line1}`} />
      <div className={`${line} ${line2}`} />
      <div className={`${line} ${line3}`} />
    </button>
  );
};

export default HeaderToggle;
