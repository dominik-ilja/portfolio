type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ProjectContainer = (props: Props) => {
  let className = "w-full max-w-2xl mx-auto ";

  if (props.className) className += props.className;

  return <div className={className}>{props.children}</div>;
};

export default ProjectContainer;
