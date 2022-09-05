type Props = {
  children?: React.ReactNode;
};

const SectionTitle = (props: Props) => {
  return (
    <h1 className="pb-3 text-5xl text-center border-b-2 border-b-primary">
      {props.children}
    </h1>
  );
};

export default SectionTitle;
