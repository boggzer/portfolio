import React from 'react';
import ReactDOMServer from 'react-dom/server';
//https://stackoverflow.com/a/45465286
const useGetBBox = (
  el: SVGSVGElement | React.ReactElement<SVGElement>,
): React.ReactElement => {
  let tempSvg;
  const tempDiv = document.createElement('div');
  tempDiv.setAttribute(
    'style',
    'position:absolute; visibility:hidden; width:0; height:0',
  );
  if ('tagName' in el && el['tagName'] === 'svg') {
    tempSvg = el.cloneNode(true);
  } else {
    tempSvg = document.createElement('div');
    tempSvg.innerHTML = ReactDOMServer.renderToStaticMarkup(
      el as React.ReactElement,
    );
  }
  console.log(tempSvg, tempDiv);
  tempDiv.appendChild(tempSvg);
  document.body.appendChild(tempDiv);
  document.body.removeChild(tempDiv);
  return (
    <div
      className='measure'
      style={{
        visibility: 'hidden',
        width: 0,
        height: 0,
        position: 'absolute',
      }}
    >
      {el}
    </div>
  );
};

export default useGetBBox;
