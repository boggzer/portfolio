import React from 'react';
import ReactDOMServer from 'react-dom/server';
import svgToTinyDataUri from 'mini-svg-data-uri';

const useSvgToUri = (element: React.ReactElement | string): string => {
  if (typeof element !== 'string') {
    element = ReactDOMServer.renderToStaticMarkup(element);
  }
  return svgToTinyDataUri(element);
};

export default useSvgToUri;
