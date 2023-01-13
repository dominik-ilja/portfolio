import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ className, ...props }: Props) => {
  const classes = twMerge("container px-3 lg:px-16 mx-auto", className);
  const classNames = "container lg:max-w-[1100px]";

  return <div className={classes}>{props.children}</div>;
};

Container.defaultProps = {
  className: "",
};

export default Container;
