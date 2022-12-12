type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Bold = (props: Props) => {
  return <b className="font-semibold text-yellow">{props.children}</b>;
};

export default Bold;
