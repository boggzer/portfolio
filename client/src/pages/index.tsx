import React from 'react';
import '../styles/index.scss';
import { Section, ComingSoon } from '../components';
import { ratio } from '../variables';
import { useRootContext } from '../context';
import gsap from 'gsap';
// import SvgNoise from '../components/effects/SvgNoise';
// import { useSvgToUri } from '../hooks';

const IndexPage: React.FunctionComponent = (): React.ReactElement => {
  // const [_enableAnimation, setEnableAnimation] = React.useState<boolean>(true);
  const { browser } = useRootContext();
  const svgBackgroundRef = React.useRef<SVGFETurbulenceElement | null>(null);
  const tween = React.useRef<gsap.core.Tween>();

  const handleClick = () => {
    tween.current?.isActive() ? tween.current?.pause() : tween.current?.play();
  };

  const [conditionalAttrs, setConditionalAttrs] = React.useState<
    { onClick: typeof handleClick } | Record<string, never>
  >({ onClick: handleClick });

  React.useEffect(() => {
    if ('prefersReducedMotion' in browser) {
      if (browser.prefersReducedMotion) {
        setConditionalAttrs({});
      } else {
        tween.current = gsap.to(svgBackgroundRef.current, {
          attr: { seed: 1 },
          duration: 0.4,
          repeat: -1,
          repeatDelay: 0,
          yoyo: true,
          ease: 'none',
          paused: false,
          snap: {
            seed: 1,
          },
        });
      }
    }
  }, [browser]);

  return (
    <>
      <Section className='grid grid__cell grid__cell--1/1 grid--h-align-center grid--v-align-center test'>
        <ComingSoon
          className='grid__cell grid--v-align-center'
          style={{ zIndex: 2 }}
          textClasses='text__transform--low text__align--center'
          textStyle={{ marginTop: `-${Math.floor(ratio * 3 * 10)}%` }}
        />
        <div
          className='comingsoon-bg'
          style={{ zIndex: 1 }}
          {...conditionalAttrs}
        >
          <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <radialGradient
                id='grad2'
                fx='10%'
                fy='10%'
                r='90%'
                spreadMethod='pad'
              >
                <stop offset='50%' stopColor='#fff' stopOpacity={0} />
                <stop offset='90%' stopColor='#000' stopOpacity={1} />
              </radialGradient>
              <filter id='displacementFilter2'>
                <feOffset dx={-150} dy={-150} in='SourceGraphic' result='o' />
                <feTurbulence
                  in='o'
                  type='turbulence'
                  numOctaves={1}
                  baseFrequency={0.5}
                  result='turb'
                  seed={5}
                  ref={svgBackgroundRef}
                ></feTurbulence>
                <feDisplacementMap
                  in='o'
                  in2='turb'
                  scale={250}
                  xChannelSelector='G'
                  yChannelSelector='R'
                  result='res'
                />
                <feGaussianBlur in='res' stdDeviation='.5' />
              </filter>
            </defs>
            <g>
              <rect
                filter='url(#displacementFilter2)'
                fill='url(#grad2)'
                width='100%'
                height='100%'
                transform='scale(1.2)'
              />
            </g>
          </svg>
        </div>
      </Section>
    </>
  );
  /*
  const bg = (
    <SvgNoise viewBox='0 0 314 130' containerHeight='100%' blur={0.55}>
      <path d='M34.94 118.75L19.77 87.24L4.6 58.16L1.56 24.23L25.83 0L65.28 7.27L104.72 12.12L144.16 21.81L180.57 33.93L220.01 43.62L253.38 60.59L289.79 77.55L314.06 101.79L271.59 109.06L232.15 111.48L189.67 111.48L150.23 111.48L110.79 111.48L71.34 113.9'></path>
    </SvgNoise>
  );
  return (
    <Wrapper>
      <div
        style={{
          position: 'fixed',
          zIndex: -1,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        className='height--1/1 width--1/1'
      >
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 250 250'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <radialGradient
              id='noise-gradient-fill2'
              fx='50%'
              fy='50%'
              r='50%'
              spreadMethod='pad'
            >
              <stop offset='60%' stopColor='#000' stopOpacity='1'></stop>
              <stop offset='81%' stopColor='#fff' stopOpacity='0'></stop>
            </radialGradient>
            <filter id='displacementFilter2'>
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
          <g filter='url(#displacementFilter2)'>
            <path
              fill='url(#noise-gradient-fill2)'
              style={{ transform: 'scale(2)' }}
              d='M110.75,103c-17.29,0-18.69-1-29.59-9-3.43-2.51-7.7-5.63-13.69-9.61C62.4,81,56.21,73.38,48.05,60.45c7.67,1.61,15.88,3,24.55,4.48,13.35,2.27,27.16,4.61,41,8.1a9.21,9.21,0,0,0,2.16.21c7.63,0,26.17-5.26,44.09-10.34,14.67-4.16,28.53-8.09,33.13-8.09,1,0,1.19.19,1.19.2h0s0,.06-.07.16c-22.17,43.12-34.91,47.47-60.79,47.62-4.51,0-8.49.06-12,.1C117.23,102.93,113.76,103,110.75,103ZM45.94,59C29.82,55.43,12.6,50.07,5,37.74-.09,29.61-.84,19,2.64,5.27,3.45,2.1,4.65.5,6.21.5c5.65,0,16.06,18,27.07,37.07C37.43,44.74,41.7,52.15,45.94,59Z'
            />
            <path
              fill='url(#noise-gradient-fill2)'
              d='M6.21,0V1c5.37,0,16.18,18.72,26.64,36.82,3.94,6.82,8,13.86,12,20.41C29.21,54.7,12.74,49.35,5.38,37.47c-5-8-5.7-18.5-2.25-32.08C3.87,2.48,4.9,1,6.21,1V0M193,55.31h.47C182.68,76.25,174.12,88,164.87,94.55c-9,6.37-18.37,7.66-31.55,7.74-4.51,0-8.49.06-12,.1-4,0-7.54.07-10.54.07-17.13,0-18.52-1-29.3-8.89C78,91.06,73.75,87.94,67.75,84c-4.88-3.24-10.83-10.5-18.65-22.77C56.45,62.7,64.28,64,72.51,65.42c13.35,2.27,27.15,4.61,41,8.09a9.65,9.65,0,0,0,2.28.23c7.7,0,26.27-5.27,44.23-10.36,14.64-4.15,28.46-8.07,33-8.07M6.21,0c-1.76,0-3.15,1.57-4,5.14C-7.09,41.56,14.44,52.7,47,59.71,31.05,34.24,14.44,0,6.21,0ZM193,54.31c-10.15,0-63.22,18.43-77.22,18.43a8.36,8.36,0,0,1-2-.2C90.37,66.67,66.67,64,47,59.71c7.14,11.4,14.15,21.05,20.21,25.08,25.07,16.67,20.63,18.67,43.56,18.67,5.6,0,12.85-.12,22.56-.17,26.08-.15,39.19-5,61.23-47.89.39-.76-.2-1.09-1.56-1.09Z'
            />
          </g>
        </svg>
      </div>
      <div className='grid height--1/1'>
        <nav className='indexpage__nav grid__cell grid__cell--1/3 grid--v-align-stretch'>
          <ul className='indexpage__nav-inner list--no-marker grid grid--column'>
            <li
              className='indexpage__nav-link grid__cell grid__cell--1/1 grid--h-align-right width--1/1'
              style={{
                backgroundImage: `url("${useSvgToUri(bg)}")`,
              }}
            >
              <a className='text__transform--low text__h2' href='/work'>
                Work
              </a>
            </li>
            <li className='indexpage__nav-link grid__cell grid__cell--1/1 grid--h-align-right width--1/1'>
              <a className='text__transform--low text__h2' href='/work'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className='grid__cell grid__cell--1/3'>
          <div className='indexpage__intro-text-container grid grid--column width--1/1 height--2/5'>
            <div className='indexpage__svgcircle grid__cell grid__cell--1/1 height--1/1 width--1/1'>
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 250 250'
                xmlns='http://www.w3.org/2000/svg'
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
                  <clipPath id='cutout-square'>
                    <polygon points='0 0 0 125 125 125 125 300 300 300 300 0 0 0'></polygon>
                  </clipPath>
                  <pattern
                    id='noise-circle-pattern'
                    x='0'
                    y='0'
                    height='1'
                    width='1'
                  >
                    <circle
                      fill='url(#noise-gradient-fill)'
                      cx='100'
                      cy='100'
                      r='250'
                      filter='url(#displacementFilter)'
                      transform='rotate(80 125 125)'
                    ></circle>
                  </pattern>
                </defs>
                <g clipPath='url(#cutout-square)'>
                  <rect
                    fill='url(#noise-circle-pattern)'
                    width='100%'
                    height='100%'
                  />
                </g>
              </svg>
            </div>
            <div className='indexpage__dev-text grid grid__cell grid__cell--1/1'>
              <svg xmlns='http://www.w3.org/2000/svg' height='100%'>
                <path
                  id='indexpage__title-svg-path'
                  d='M0,5V23.18a28,28,0,0,0,28,28h23.7'
                  stroke='rgba(255,255,255,0)'
                  strokeWidth='0'
                  fill='none'
                ></path>
                <text
                  className='text__h2'
                  fill='black'
                  fontSize='var(--heading-one-size)'
                  fontFamily='var(--serif-family)'
                >
                  <textPath
                    className='text__transform--low'
                    xlinkHref='#indexpage__title-svg-path'
                  >
                    Front-end Developer
                  </textPath>
                </text>
              </svg>
            </div>
            <div className='indexpage__name-text grid grid__cell grid__cell--1/1 grid--v-align-bottom text__align--right'>
              <Text classes='text__transform--low text__weight--400' type='h2'>
                Jonathan Gegerfeldt Bogg
              </Text>
            </div>
          </div>
        </div>
        <div className='grid__cell grid__cell--1/3'></div>
      </div>
    </Wrapper>
  );
  */
};

export default IndexPage;
