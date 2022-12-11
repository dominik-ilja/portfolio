type Props = {
  text: string;
  className?: string;
};

const Tag = (props: Props) => {
  return (
    <div
      className={`p-[6px] text-sm sm:text-base bg-base-5 text-center rounded-[3px] ${
        props.className || ""
      }`}
    >
      {props.text}
    </div>
  );
};

export default Tag;
