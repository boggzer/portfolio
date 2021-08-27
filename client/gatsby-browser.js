import React from 'react';
import { Wrapper } from './src/components';
import { RootContextProvider } from './src/context';

export const wrapPageElement = ({ element }) => (
  <Wrapper className='grid grid--column'>{element}</Wrapper>
);

export const wrapRootElement = ({ element }) => (
  <RootContextProvider>{element}</RootContextProvider>
);
