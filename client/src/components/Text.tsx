import React from 'react';
import { TextProps } from '../types';

const Text: React.FunctionComponent<
  TextProps & Omit<React.HTMLAttributes<HTMLHeadingElement>, 'className'>
> = ({
  children,
  classes = '',
  innerClasses = '',
  type = 'text',
  ...rest
}): React.ReactElement => {
  const textType = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    text: 'p',
  };
  const Tag = textType[type] as keyof JSX.IntrinsicElements;
  return (
    <div className={`text__container text__${type}`} {...rest}>
      <Tag className={classes}>{children}</Tag>
    </div>
  );
};

export default Text;
