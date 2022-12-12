import Underline from "../Underline/Underline";

type Props = {
  title?: string;
};

const SectionTitle = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-base-80">
        {props.title || "Title"}
      </h1>
      <Underline />
    </div>
  );
};

export default SectionTitle;
