import React, { useState } from 'react';
import { FiArrowRight, FiSettings } from 'react-icons/fi';

import firefoxLogoImage from 'assets/images/firefox-logo.png';
import googleIconImage from 'assets/icons/google.ico';

import * as SC from './styles';

import { SidebarMenu } from 'components/SidebarMenu';

import { MostAccessedItems } from 'components/MostAccessedItems';
import { SidebarMenuSection } from 'components/SidebarMenuSection';
import { SidebarMenuSectionCodes } from 'models/enumerators/SidebarMenuSectionCodes';

const Home: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SC.Container>
      <SC.Header>
        <SC.SettingsButton onClick={() => setShowSidebar(true)}>
          <FiSettings color="#C5C5C8" />
        </SC.SettingsButton>
      </SC.Header>

      <SC.MainContent>
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

        <MostAccessedItems />
      </SC.MainContent>

      <SidebarMenu
        visible={showSidebar}
        handleCloseButtonClick={() => setShowSidebar(false)}
      >
        <SidebarMenuSection
          sidebarMenuSectionCode={SidebarMenuSectionCodes.RecentActivity}
          title="Shortcuts"
          description="Sites you save or visit"
        >
          <h1>Hi, i am the content</h1>

          <strong>I worked!</strong>
        </SidebarMenuSection>

        <SidebarMenuSection
          sidebarMenuSectionCode={SidebarMenuSectionCodes.RecentActivity}
          title="Recent activity"
          description="A section of recent sites and content"
        />
      </SidebarMenu>
    </SC.Container>
  );
};

export { Home };
