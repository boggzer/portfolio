import React from 'react';
import '../styles/index.scss';
import Main from '../components/Main';
import Text from '../components/Text';
import SvgNoise from '../components/effects/SvgNoise';
import { useSvgToUri } from '../hooks';

const IndexPage = (): React.ReactElement => {
  const bg = (
    <SvgNoise viewBox='0 0 314 130' containerHeight='100%' blur={0.55}>
      <path d='M34.94 118.75L19.77 87.24L4.6 58.16L1.56 24.23L25.83 0L65.28 7.27L104.72 12.12L144.16 21.81L180.57 33.93L220.01 43.62L253.38 60.59L289.79 77.55L314.06 101.79L271.59 109.06L232.15 111.48L189.67 111.48L150.23 111.48L110.79 111.48L71.34 113.9'></path>
    </SvgNoise>
  );
  return (
    <Main>
      <div className='grid full-height'>
        <nav className='indexpage__nav grid__cell grid__cell--1/3 grid--v-align-stretch'>
          <ul className='indexpage__nav-inner list--no-marker grid grid--column'>
            <li
              className='indexpage__nav-link grid__cell grid__cell--1/1 grid--h-align-right full-width'
              style={{
                backgroundImage: `url("${useSvgToUri(bg)}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
              }}
            >
              <a className='text--lowercase' href='/work'>
                Work
              </a>
            </li>
            <li className='indexpage__nav-link grid__cell grid__cell--1/1 grid--h-align-right full-width'>
              <a className='text--lowercase' href='/work'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className='grid__cell grid__cell--1/3'>
          {/* img */}
          <div className='indexpage__name-title grid full-width'>
            <div className='indexpage__svgcircle'>
              <svg
                width='300'
                height='300'
                viewBox='0 0 250 250'
                xmlns='http://www.w3.org/2000/svg'
                style={{ transform: 'rotate(80deg)', maxWidth: '100%' }}
              >
                <defs>
                  <radialGradient
                    id='noise-gradient-fill'
                    fx='50%'
                    fy='50%'
                    r='50%'
                    spreadMethod='pad'
                  >
                    <stop offset='20%' stopColor='#000' stopOpacity='1'></stop>
                    <stop offset='21%' stopColor='#fff' stopOpacity='0'></stop>
                  </radialGradient>
                  <filter id='displacementFilter'>
                    <feOffset
                      dx='-20'
                      dy='-20'
                      in='SourceGraphic'
                      result='offset-graphic'
                    ></feOffset>
                    <feTurbulence
                      in='offset-graphic'
                      type='turbulence'
                      numOctaves='2'
                      baseFrequency='0.5'
                      result='turbulence'
                      seed='5'
                    ></feTurbulence>
                    <feDisplacementMap
                      in='offset-graphic'
                      in2='turbulence'
                      scale='220'
                      xChannelSelector='G'
                      yChannelSelector='R'
                      result='final-result'
                    ></feDisplacementMap>
                    <feGaussianBlur
                      in='final-result'
                      stdDeviation='.5'
                    ></feGaussianBlur>
                  </filter>
                </defs>
                <circle
                  fill='url(#noise-gradient-fill)'
                  cx='100'
                  cy='100'
                  r='250'
                  filter='url(#displacementFilter)'
                ></circle>
              </svg>
            </div>
            <div className='indexpage__title grid grid__cell grid__cell--1/2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 230 230'
                height='100%'
              >
                <path
                  id='indexpage__title-svg-path'
                  d='M10,0 a60,60 0 0,0 115,0'
                  stroke='rgba(255,255,255,0)'
                  strokeWidth='0'
                  fill='none'
                  transform='rotate(23deg) scale(2.2)'
                ></path>
                <text fill='black' fontSize='26' fontFamily='arial'>
                  <textPath id='test' xlinkHref='#indexpage__title-svg-path'>
                    Front-end Developer
                  </textPath>
                </text>
              </svg>
            </div>
            <div className='indexpage__name grid grid__cell grid__cell--1/2 grid--v-align-bottom text__align--right'>
              <Text classes='text--lowercase' type='h1'>
                Jonathan Gegerfeldt Bogg
              </Text>
            </div>
          </div>
        </div>
        <div className='grid__cell grid__cell--1/3'></div>
      </div>
    </Main>
  );
};

export default IndexPage;
