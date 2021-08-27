import React from 'react';
import { ImageProps } from '../types';

const Image: React.FunctionComponent<ImageProps> = ({
  src,
  alt,
  classes,
  ...rest
}): JSX.Element =>
  src ? (
    <img
      className={`${classes || ''} Image`}
      alt={alt}
      srcSet={`${src}?w=180&fit=max 180w,
            ${src}?w=220&fit=max 220w,
            ${src}?w=300&fit=max 300w,
            ${src}?w=360&fit=max 360w,
            ${src}?w=500&fit=max 500w, 
            ${src}?w=800&fit=max 800w,
            ${src}?w=1150&fit=max 1150w`}
      {...rest}
    />
  ) : (
    <></>
  );
export default Image;
