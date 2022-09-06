type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SectionTitle = (props: Props) => {
  return (
    <h1 className={`pb-3 text-5xl text-center border-b-2 border-b-primary ${props.className || ''}`}>
      {props.children}
    </h1>
  );
};

export default SectionTitle;
