type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Section = (props: Props) => {
  let className = "py-16 ";

  if (props.className) className += props.className;

  return <section className={className}>{props.children}</section>;
};

export default Section;
