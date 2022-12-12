type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  let className = "container px-3 mx-auto ";

  if (props.className) className += props.className;

  return <div className={className}>{props.children}</div>;
};

export default Container;
