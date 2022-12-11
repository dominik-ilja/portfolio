import Link from "next/link";

type Props = {
  children?: string | number;
  className?: string;
  rounded?: boolean;
  internalLink?: string;
  externalLink?: string;
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
      <Link href={props.internalLink} className={className}>
        {props.children}
      </Link>
    );
  }
  if (props.externalLink !== undefined) {
    return (
      <a href={props.internalLink} className={className}>
        {props.children}
      </a>
    );
  }

  return <button className={className}>{props.children}</button>;
};

export default Button;
