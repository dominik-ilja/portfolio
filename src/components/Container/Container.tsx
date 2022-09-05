import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  return (
    <div className={`container mx-auto ${props.className || ''}`}>{props.children}</div>
  );
};

export default Container;
