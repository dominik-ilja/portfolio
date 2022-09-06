type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SubTitle = (props: Props) => {
  return (
    <h4 className={`text-text-dark md:text-lg ${props.className || ''}`}>
      {props.children}
    </h4>
  );
};

export default SubTitle;
