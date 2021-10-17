import React from 'react';

import { SidebarMenuProps } from 'models/types/SidebarMenu';

import * as SC from './styles';

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  visible,
  children,
  handleCloseButtonClick,
  ...props
}) => {
  return (
    <SC.Container {...props} visible={visible}>
      <SC.Header>
        {handleCloseButtonClick && (
          <button className="close-button" onClick={handleCloseButtonClick}>
            Close
          </button>
        )}
      </SC.Header>

      <SC.MainSections>{children}</SC.MainSections>
    </SC.Container>
  );
};

export { SidebarMenu };
