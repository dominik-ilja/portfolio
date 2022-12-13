type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Text = (props: Props) => {
  let className =
    "w-full leading-relaxed md:leading-relaxed text-base-50 md:text-lg ";

  if (props.className) className += props.className;

  return <p className={className}>{props.children}</p>;
};

export default Text;
