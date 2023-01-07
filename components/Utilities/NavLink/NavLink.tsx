import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  href: string;
  exact?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
};

const NavLink = ({
  children,
  href,
  exact,
  onClick,
  className,
  ...props
}: Props) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  /*
    This useEffect prevents a hydration error.
    The classes don't match up when using router.asPath for an unknown reason.
    This let's everything render the same at first then the state will re-render
    the component with the proper changes.
  */
  useEffect(() => {
    setIsActive(
      exact ? href === router.asPath : router.asPath.startsWith(href)
    );
  }, [isActive, exact, router.asPath, href]);

  let classes = twMerge(
    "items-end flex flex-col gap-y-1 transition-all hover:text-yellow hover:after:w-6 duration-500 after:block after:w-0 after:h-[1px] after:bg-[currentcolor] after:transition-all after:duraction-500",
    className,
    clsx({
      "text-indigo after:w-6": isActive,
    })
  );

  return (
    <Link onClick={onClick} className={classes} href={href}>
      {children}
    </Link>
  );
};

NavLink.defaultProps = {
  className: "",
  exact: false,
};

export default NavLink;
