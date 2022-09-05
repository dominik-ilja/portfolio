type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Text = (props: Props) => {
  return (
    <p className={`leading-relaxed text-text ${props.className}`}>
      {props.children}
    </p>
  );
};

export default Text;
