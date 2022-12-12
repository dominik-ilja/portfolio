type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Code = (props: Props) => {
  let className = "inline-block bg-base-5 text-red ";

  if (props.className) className += props.className;

  return <code className={className}>{props.children}</code>;
};

export default Code;
