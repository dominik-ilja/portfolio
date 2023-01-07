import clsx from "clsx";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
  rounded?: boolean;
  internalLink?: string;
  externalLink?: string;
  onClick?: MouseEventHandler;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

const Button = ({
  className,
  children,
  externalLink,
  internalLink,
  onClick,
  rounded,
  target,
  ...props
}: Props) => {
  const classes = twMerge(
    "px-5 py-3 text-center text-white transition-opacity hover:opacity-80",
    className,
    clsx({
      "rounded-md": rounded,
    })
  );

  if (internalLink !== undefined) {
    return (
      <Link onClick={onClick} href={internalLink} className={classes}>
        {children}
      </Link>
    );
  }
  if (externalLink !== undefined) {
    return (
      <a
        onClick={onClick}
        href={externalLink}
        className={classes}
        target={target}
        rel={target ? "noreferrer noopener" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
};

export default Button;
