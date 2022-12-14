import Underline from "../../Underline/Underline";

type Props = {
  children?: React.ReactNode;
  underline?: boolean;
  className?: string;
};

type TitleProps = {
  children?: React.ReactNode;
  className?: string;
};

const Title = (props: TitleProps) => {
  return (
    <h1
      className={`text-5xl md:text-7xl lg:text-8xl text-center text-white ${
        props.className || ""
      }`}
    >
      {props.children}
    </h1>
  );
};

const MainTitle = (props: Props) => {
  if (props.underline) {
    return (
      <div
        className={`flex flex-col items-center gap-y-4 ${
          props.className || ""
        }`}
      >
        <Title>{props.children}</Title>
        <Underline />
      </div>
    );
  }

  return <Title className={`${props.className || ""}`}>{props.children}</Title>;
};

export default MainTitle;
