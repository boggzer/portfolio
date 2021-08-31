import React from 'react';
import ReactDOMServer from 'react-dom/server';
//import ReactDOMServer from 'react-dom/server';
import { Wrapper } from './src/components';
import { RootContextProvider, useRootContext } from './src/context';
import dompurify from 'dompurify';
import { Helmet } from 'react-helmet';

const wrapPageElement = ({ element }) => (
  <Wrapper className='grid grid--column'>{element}</Wrapper>
);

const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
    </Helmet>
    <RootContextProvider>{element}</RootContextProvider>
  </>
);

export { wrapPageElement, wrapRootElement };
