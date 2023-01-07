import clsx from "clsx";
import { MouseEventHandler, ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import useScrollBlock from "../../hooks/useScrollBlock";

type Props = {
  blockScroll?: boolean;
  children: ReactNode;
  hidden?: boolean;
  onClick?: MouseEventHandler;
};

const Overlay = forwardRef<HTMLDivElement, Props>(
  ({ children, hidden, onClick, ...props }: Props, ref) => {
    const [allowScroll, blockScroll] = useScrollBlock();

    if (props.blockScroll) {
      hidden ? allowScroll() : blockScroll();
    }

    const classes = twMerge(
      "fixed top-0 bottom-0 left-0 right-0 z-50 bg-opacity-95 bg-base-1",
      clsx({ hidden: hidden })
    );

    return (
      <div className={classes} ref={ref} onClick={onClick}>
        {children}
      </div>
    );
  }
);

Overlay.displayName = "Overlay";

Overlay.defaultProps = {
  hidden: false,
  blockScroll: true,
};

export default Overlay;
