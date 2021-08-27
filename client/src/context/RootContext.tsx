import React from 'react';
export const RootContext = React.createContext({});

const RootContextProvider: React.FunctionComponent = ({ children }) => {
  const [browserSupport, setBrowserSupport] = React.useState({});

  function checkBrowserSupport() {
    setBrowserSupport((prevState) => ({
      ...prevState,
      svgGraphics: typeof SVGRect !== 'undefined',
      svgAnimate: typeof SVGAnimateElement !== 'undefined',
    }));
  }

  React.useEffect(() => {
    checkBrowserSupport();
  }, []);

  return (
    <RootContext.Provider value={{ browserSupport }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
