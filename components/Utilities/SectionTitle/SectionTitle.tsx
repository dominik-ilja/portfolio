import Underline from "../Underline/Underline";

type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

const SectionTitle = (props: Props) => {
  let className = "flex flex-col items-center gap-y-4 ";
  if (props.className) className += props.className;

  return (
    <div className={className}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-base-80">
        {props.title || props.children || "Title"}
      </h1>
      <Underline />
    </div>
  );
};

export default SectionTitle;
