import React from 'react';
import { SvgNoiseProps } from '../../types';
import { uniqueId } from 'lodash';
import { useState } from 'react';

const SvgNoise = ({
  backgroundColor = 'rgba(0,0,0,0)',
  clipPathHeight = '100%',
  clipPathWidth = '100%',
  blur = 0.8,
  containerHeight,
  containerWidth,
  children,
  classes,
  preserveAspectRatio = 'xMaxYMin slice',
  viewBox = '0 0 0 0',
  ...rest
}: SvgNoiseProps): React.ReactElement<SVGElement> => {
  const [vB, setVB] = useState(viewBox);
  const [dimensions, setDimensions] = useState<
    Record<'height' | 'width', string | number>
  >({
    height: '100%',
    width: '100%',
  });
  const newRef = React.useRef<SVGSVGElement>(null);
  const id = uniqueId('svg-noise__');
  const clone =
    children &&
    React.Children.map(
      children,
      (child) =>
        React.isValidElement(child) &&
        React.cloneElement(child, {
          style: { ...child.props['style'], filter: `url(#${id}__filter)` },
        }),
    );

  React.useEffect(() => {
    if (!containerHeight || !containerWidth) {
      const box = newRef.current && newRef.current.getBBox();
      const state = { ...dimensions };
      if (!containerHeight && box) state['height'] = Math.round(box.height);
      if (!containerWidth && box) state['width'] = Math.round(box.width);
      console.log(box);
      state !== dimensions && setDimensions(state);
      box && setVB(`0 0 ${box.height} ${box.width}`);
    }
  }, [newRef]);

  return (
    <svg
      id={id}
      className={`svg-noise ${classes || ''}`}
      width={containerWidth ?? dimensions.width}
      height={containerHeight ?? dimensions.height}
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio={preserveAspectRatio}
      ref={newRef}
      viewBox={vB}
      {...rest}
    >
      {console.log(containerWidth || dimensions.width)}
      <defs>
        <filter id={`${id}__filter`} x='0%' y='0%'>
          <feTurbulence
            type='turbulence'
            numOctaves='2'
            baseFrequency='0.5'
            result='turbulence'
          />
          <feDisplacementMap
            in='SourceGraphic'
            scale='180'
            xChannelSelector='R'
            yChannelSelector='B'
            result='res'
          />
          <feGaussianBlur in='res' stdDeviation={blur} />
        </filter>
        <clipPath id={`${id}__clip-path`}>
          <rect height={clipPathHeight} width={clipPathWidth} />
        </clipPath>
      </defs>
      {console.log(dimensions)}
      <rect fill={backgroundColor} height='100%' width='100%' />
      <g clipPath={`url(#${id}__clip-path)`}>{clone}</g>
    </svg>
  );
};

export default SvgNoise;
