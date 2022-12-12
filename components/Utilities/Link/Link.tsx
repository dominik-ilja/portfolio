type Props = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

const Link = (props: Props) => {
  let className = "underline transition-opacity text-indigo hover:opacity-80 ";

  if (props.className) className += props.className;

  return (
    <a className={className} href={props.href}>
      {props.children}
    </a>
  );
};

export default Link;
