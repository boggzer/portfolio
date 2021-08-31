import React from 'react';

type BrowserSupportList = Record<
  'prefersReducedMotion' | 'supportsSvgGraphics' | 'supportsFontFace' | 'isIE',
  boolean
>;

const InitRootContext = () => {
  const [browser, setBrowser] = React.useState<Partial<BrowserSupportList>>({});
  const [isMounted, setIsMounted] = React.useState(false);

  const checkBrowserSupport = () => {
    setBrowser({
      supportsSvgGraphics: typeof SVGRect !== 'undefined',
      prefersReducedMotion: window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches,
      supportsFontFace:
        typeof window.FontFace !== 'undefined' || 'webkitFontFace' in window,
      isIE: 'documentMode' in window,
    });
  };

  React.useEffect(() => {
    checkBrowserSupport();
  }, []);

  return React.createContext({ browser, isMounted, setIsMounted });
};

const RootContextProvider: React.FunctionComponent = ({ children }) => {
  const Context = InitRootContext();
  const RootContext = useRootContext();

  return (
    <Context.Provider value={{ ...RootContext }}>{children}</Context.Provider>
  );
};

const useRootContext = () => {
  const Context = React.useContext(InitRootContext());
  if (typeof Context === 'undefined') {
    throw new Error('useRootContext must be used in a RootContextProvider.');
  }
  return Context;
};

export { RootContextProvider, useRootContext };
