type Props = {
  children?: string | number;
  className?: string;
  rounded?: boolean;
};

const Button = (props: Props) => {
  let className = "px-5 py-3 text-white transition-opacity hover:opacity-80";

  if (props.className) {
    className = `${className} ${props.className}`;
  }
  if (props.rounded) {
    className = `${className} rounded-md`;
  }

  return <button className={className}>{props.children || "Text"}</button>;
};

export default Button;
