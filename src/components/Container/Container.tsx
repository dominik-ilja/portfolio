import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  return (
    <div className={`container mx-auto px-2 sm:px-8 ${props.className || ''}`}>{props.children}</div>
  );
};

export default Container;
