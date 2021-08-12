import React from 'react';
import { TextProps } from '../types';

const Text = ({
  children,
  type,
  classes,
  ...rest
}: TextProps): React.ReactElement => {
  const textType = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    text: 'p',
  };
  return (
    <div
      className={`${type ? textType[type] : 'p'} ${classes || null}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Text;
