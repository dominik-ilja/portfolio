import clsx from "clsx";
import { MouseEvent, MouseEventHandler, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Overlay from "../Overlay/Overlay";

type Props = {
  blockScroll?: boolean;
  children?: React.ReactNode;
  className?: string;
  hidden?: boolean;
  contentPosition?: "top" | "center" | "bottom";
  onBackgroundClick?: MouseEventHandler;
};

const Modal = ({
  blockScroll,
  children,
  className,
  contentPosition,
  hidden,
  onBackgroundClick,
}: Props) => {
  const backgroundRef = useRef(null);

  let classes = twMerge(
    "mx-auto absolute left-1/2 -translate-x-1/2",
    className,
    clsx({
      "top-0": contentPosition === "top",
      "top-1/2 -translate-y-1/2": contentPosition === "center",
      "bottom-0": contentPosition === "bottom",
    })
  );

  function handleBackgroundClick(e: MouseEvent) {
    if (onBackgroundClick && backgroundRef.current === e.target) {
      onBackgroundClick(e);
    }
  }

  return (
    <Overlay
      blockScroll={blockScroll}
      onClick={handleBackgroundClick}
      hidden={hidden}
      ref={backgroundRef}
    >
      <div className={classes}>{children}</div>
    </Overlay>
  );
};

Modal.defaultProps = {
  blockScroll: true,
  className: "",
  contentPosition: "center",
  hidden: false,
};

export default Modal;
