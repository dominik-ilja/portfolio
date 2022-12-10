type Props = {
  children?: string | number;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <button
      className={`px-5 py-3 text-white transition-opacity rounded-md hover:opacity-80 ${
        props.className || ""
      }`}
    >
      {props.children || "Text"}
    </button>
  );
};

export default Button;
