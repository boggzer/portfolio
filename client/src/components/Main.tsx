import React from 'react';
import { MainProps } from '../types';

const Main = ({ children }: MainProps): React.ReactElement => {
  // Reset default gatsby elements
  React.useEffect(() => {
    const gatsbyFocusWrapper = document.getElementById('gatsby-focus-wrapper');
    if (gatsbyFocusWrapper) {
      gatsbyFocusWrapper.removeAttribute('style');
      gatsbyFocusWrapper.removeAttribute('tabIndex');
    }
  }, []);
  return <main>{children}</main>;
};

export default Main;
