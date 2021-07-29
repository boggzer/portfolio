import * as React from 'react';
import '../styles/index.scss';
import Main from '../components/Main';

const IndexPage = () => {
  return (
    <Main>
      <div className="grid full-height">
        <nav className="index-nav grid__cell grid__cell--1/3 grid--v-align-bottom">
          <ul className="index-nav-inner list--no-marker grid grid--column">
            <li className="index-nav-link grid__cell grid__cell--1/1 grid--h-align-right grid--v-align-center">
              <a className="text--lowercase" href="/work">
                Work
              </a>
            </li>
            <li className="index-nav-link grid__cell grid__cell--1/1 grid--h-align-right grid--v-align-center">
              <a className="text--lowercase" href="/work">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Main>
  );
};

export default IndexPage;
