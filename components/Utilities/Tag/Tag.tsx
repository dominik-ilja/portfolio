type Props = {
  text: string;
  className?: string;
};

const Tag = (props: Props) => {
  return (
    <div
      className={`p-1 bg-base-5 text-center rounded-[3px] ${
        props.className || ""
      }`}
    >
      {props.text}
    </div>
  );
};

export default Tag;
