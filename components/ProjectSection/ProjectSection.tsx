import Section from "../Utilities/Section/Section";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ProjectSection = (props: Props) => {
  let className = "flex flex-col gap-y-9 ";

  if (props.className) className += props.className;

  return <Section className={className}>{props.children}</Section>;
};

export default ProjectSection;
