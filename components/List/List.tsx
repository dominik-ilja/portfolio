import React, { ReactElement } from "react";

type Props = {
  children?: ReactElement<HTMLLIElement> | ReactElement<HTMLLIElement>[];
  ordered?: boolean;
  className?: string;
};

const List = (props: Props) => {
  let className = "ml-4 sm:text-lg text-base-50" + " ";
  let listType = "ul";

  if (props.className) {
    className += props.className + " ";
  }

  if (props.ordered) {
    listType = "ol";
    className += "list-decimal";
  } else {
    className += "list-disc";
  }

  return React.createElement(listType, { className }, props.children);
};

export default List;
