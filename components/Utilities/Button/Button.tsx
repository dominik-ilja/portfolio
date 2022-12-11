import Link from "next/link";
import { MouseEventHandler } from "react";

type Props = {
  children?: string | number;
  className?: string;
  rounded?: boolean;
  internalLink?: string;
  externalLink?: string;
  onClick?: MouseEventHandler;
};

const Button = (props: Props) => {
  let className = "px-5 py-3 text-white transition-opacity hover:opacity-80";

  if (props.className) {
    className = `${className} ${props.className}`;
  }
  if (props.rounded) {
    className = `${className} rounded-md`;
  }

  if (props.internalLink !== undefined) {
    return (
      <Link
        onClick={props.onClick}
        href={props.internalLink}
        className={className}
      >
        {props.children}
      </Link>
    );
  }
  if (props.externalLink !== undefined) {
    return (
      <a
        onClick={props.onClick}
        href={props.externalLink}
        className={className}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
};

export default Button;
