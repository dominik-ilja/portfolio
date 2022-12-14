type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SubTitle = (props: Props) => {
  let className = "text-3xl text-center text-white md:text-4xl" + " ";

  if (props.className) className += props.className;

  return <h2 className={className}>{props.children}</h2>;
};

export default SubTitle;
