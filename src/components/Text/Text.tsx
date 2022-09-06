type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Text = (props: Props) => {
  return (
    <p className={`leading-relaxed text-text lg:text-lg ${props.className}`}>
      {props.children}
    </p>
  );
};

export default Text;
