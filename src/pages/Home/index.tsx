import React from 'react';
import { FiArrowRight, FiSettings } from 'react-icons/fi';

import firefoxLogoImage from '../../assets/images/firefox-logo.png';
import googleIconImage from '../../assets/icons/google.ico';

import * as SC from './styles';

const Home: React.FC = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.SettingsButton>
          <FiSettings color="#C5C5C8" />
        </SC.SettingsButton>
      </SC.Header>

      <SC.MainContent className="debugX">
        <div className="logo-container">
          <img src={firefoxLogoImage} alt="Logo" />

          <strong>Fakefox</strong>
        </div>

        <form className="search-form">
          <div className="icon">
            <img src={googleIconImage} alt="Google" />
          </div>

          <input
            type="text"
            placeholder="Search with google or enter address"
          />

          <button type="submit" className="submit-button">
            <FiArrowRight />
          </button>
        </form>

        <section className="most-accessed-sites-container">
          <span>Site A</span>
          <span>Site B</span>
          <span>Site C</span>
        </section>
      </SC.MainContent>
    </SC.Container>
  );
};

export { Home };
