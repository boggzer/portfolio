import React from 'react';
import { SectionProps } from '../types';

const Section = ({ children }: SectionProps): JSX.Element => (
  <div>{children}</div>
);

export default Section;
