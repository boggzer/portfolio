import React from 'react';

const Wrapper: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...rest
}): React.ReactElement => {
  // Reset default gatsby elements
  React.useEffect(() => {
    const gatsbyFocusWrapper = document.getElementById('gatsby-focus-wrapper');
    if (gatsbyFocusWrapper) {
      gatsbyFocusWrapper.removeAttribute('style');
      gatsbyFocusWrapper.removeAttribute('tabIndex');
    }
  }, []);
  return <main {...rest}>{children}</main>;
};

export default Wrapper;
