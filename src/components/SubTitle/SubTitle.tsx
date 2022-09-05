type Props = {
  children?: React.ReactNode;
};

const SubTitle = (props: Props) => {
  return (
    <h4 className="text-text-dark">
      {props.children}
    </h4>
  );
};

export default SubTitle;
