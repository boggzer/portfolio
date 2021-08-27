import React from 'react';

const Section: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...rest
}): JSX.Element => <div {...rest}>{children}</div>;

export default Section;
