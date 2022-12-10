type Props = {
  className?: string;
};

const Underline = (props: Props) => {
  return (
    <div className={`w-14 h-[2px] bg-base-20 ${props.className || ""}`}></div>
  );
};

export default Underline;
