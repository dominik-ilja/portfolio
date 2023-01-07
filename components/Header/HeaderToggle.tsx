import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  onClick: MouseEventHandler;
  open: boolean;
};

const HeaderToggle = ({ className, onClick, open }: Props) => {
  const classes = twMerge(
    "relative flex items-center w-8 h-8 mt-3 cursor-pointer",
    className
  );

  let line = "absolute right-0 bg-white h-[3px] transition-all";
  let line1: string;
  let line2: string;
  let line3: string;

  if (open) {
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
    <button onClick={onClick} className={classes}>
      <div className={`${line} ${line1}`} />
      <div className={`${line} ${line2}`} />
      <div className={`${line} ${line3}`} />
    </button>
  );
};

export default HeaderToggle;
