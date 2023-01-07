import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLElement>;

const Section = ({ children, className, ...props }: Props) => {
  const classes = twMerge("py-16", className);

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

Section.defaultProps = {
  className: "",
};

export default Section;
