import React from 'react';
import { ratio } from '../variables';

const ComingSoon: React.FunctionComponent<
  React.HTMLProps<HTMLDivElement> & {
    textClasses?: string;
    textStyle?: React.CSSProperties;
  }
> = ({ textClasses = '', textStyle = {}, ...rest }) => {
  return (
    <div {...rest}>
      <h1 className={textClasses} style={textStyle}>
        Coming Soon
      </h1>
      <div
        className='grid grid--v-align-center comingsoon__inner'
        style={{
          height: '21px',
          transform: `translateY(${Math.floor(ratio * 22)}px)`,
        }}
      >
        <span className='grid__cell grid__cell--1/2 grid--h-align-right'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/jonathan-gegerfeldt-bogg/'
            style={{
              transform: `translateX(-${Math.floor(ratio * 4)}px)`,
            }}
            rel='noreferrer'
          >
            <svg
              role='img'
              aria-labelledby='linkedin-link-svg'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='100%'
              viewBox='0 0 24 24'
            >
              <title id='linkedin-link-svg'>See Linkedin profile</title>
              <defs>
                <pattern id='link-fill-violet' height='100%' width='100%'>
                  <g transform='rotate(90)'>
                    <rect className='violet-bg' width='100%' height='100%' />
                    <rect className='black-bg' width='100%' height='100%' />
                  </g>
                </pattern>
              </defs>
              <path
                fill='url(#link-fill-violet)'
                className='comingsoon__link--bg'
                d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
              />
            </svg>
          </a>
        </span>
        <span className='grid__cell grid__cell--1/2'>
          <a
            target='_blank'
            href='mailto:jonathan.bogg@gmail.com'
            style={{
              transform: `translateX(${Math.floor(ratio * 4)}px)`,
            }}
            rel='noreferrer'
          >
            <svg
              role='img'
              aria-labelledby='email-link-svg'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='100%'
              viewBox='0 0 24 24'
            >
              <title id='email-link-svg'>Contact via e-mail</title>
              <defs>
                <pattern id='link-fill-pink' height='100%' width='100%'>
                  <g transform='rotate(90)'>
                    <rect className='pink-bg' width='100%' height='100%' />
                    <rect className='black-bg' width='100%' height='100%' />
                  </g>
                </pattern>
              </defs>
              <path
                fill='url(#link-fill-pink)'
                className='comingsoon__link--bg'
                d='M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0Z'
              />
              <path
                fill='#fff'
                d='M18.46,14.34a6.26,6.26,0,0,1-.95,1,4.17,4.17,0,0,1-1.17.71,3.66,3.66,0,0,1-1.45.32,3.29,3.29,0,0,1-1.07-.18A1.17,1.17,0,0,1,13,15v.21l-2.14.72a1.47,1.47,0,0,1-.5.1H10a2.29,2.29,0,0,1-1.87-1,2.9,2.9,0,0,1-.5-1.71A4.77,4.77,0,0,1,8,11.52,5.36,5.36,0,0,1,8.87,10a4,4,0,0,1,.92-.76A3.3,3.3,0,0,1,10.25,9l1.37-.47L13,8.09A1,1,0,0,1,13.33,8h.05a4.06,4.06,0,0,1,1.21.26l.11,0,.36.15.09,0a.2.2,0,0,0,.11,0,1.87,1.87,0,0,0,.26-.21.34.34,0,0,1,.27-.12.45.45,0,0,1,.16,0c.17.07.25.17.25.28v0l-1.31,5.64a2.87,2.87,0,0,0-.07.53c0,.38.15.61.43.68a.91.91,0,0,0,.23,0,1.57,1.57,0,0,0,.56-.12,2.68,2.68,0,0,0,.89-.56,4.74,4.74,0,0,0,1.14-1.81,7.65,7.65,0,0,0,.46-2.68A4.54,4.54,0,0,0,17,6.36,6.16,6.16,0,0,0,13,5.11,7.3,7.3,0,0,0,9.64,6,6.58,6.58,0,0,0,6.92,8.59a7.69,7.69,0,0,0-1.06,4,7.11,7.11,0,0,0,.7,3.19A5.13,5.13,0,0,0,8.6,18a6.09,6.09,0,0,0,3.18.78,8.05,8.05,0,0,0,3-.56A8.45,8.45,0,0,0,17,16.93a.28.28,0,0,1,.22-.09.33.33,0,0,1,.24.1.34.34,0,0,1,.11.24.42.42,0,0,1-.06.21.91.91,0,0,1-.22.33,6.92,6.92,0,0,1-2.69,1.57,10.45,10.45,0,0,1-3.2.48,7.21,7.21,0,0,1-5.28-2,6.9,6.9,0,0,1-2-5.12,7.93,7.93,0,0,1,2.55-6A8.83,8.83,0,0,1,13,4.23a7.51,7.51,0,0,1,5,1.63,5.33,5.33,0,0,1,2,4.31A6.67,6.67,0,0,1,18.46,14.34ZM13,14.41l1.08-4.73a2,2,0,0,0-.61-.45A1.73,1.73,0,0,0,12.72,9h0a.69.69,0,0,0-.24,0l-.62.2-.61.21a.92.92,0,0,0-.29.17,3.52,3.52,0,0,0-.9,1.21,4.79,4.79,0,0,0-.43,1.4,3.34,3.34,0,0,0-.07.68A2.27,2.27,0,0,0,9.78,14a1.59,1.59,0,0,0,1,.85,2,2,0,0,0,.53.08h.18a2,2,0,0,0,.38-.09l.59-.2Z'
              />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ComingSoon;
