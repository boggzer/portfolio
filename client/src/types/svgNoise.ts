import React from 'react';

interface SvgNoiseProps
  extends Omit<
    React.SVGProps<SVGElement>,
    'children' | 'className' | 'id' | 'ref' | 'xmlns'
  > {
  readonly isBackground?: boolean;
  readonly backgroundColor?: string;
  readonly children:
    | React.ReactChildren
    | React.ReactElement
    | React.ReactElement[];
  readonly classes?: string;
  readonly clipPathHeight?: number | string;
  readonly clipPathWidth?: number | string;
  readonly blur?: number;
  containerHeight?: string | number | undefined;
  containerWidth?: string | number | undefined;
  readonly preserveAspectRatio?: string;
  svgRef?: any;
  setBg?: any;
}

export default SvgNoiseProps;
