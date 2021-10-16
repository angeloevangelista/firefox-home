import React, { InputHTMLAttributes } from 'react';

import * as SC from './styles';

type SidebarMenuProps = {
  visible: boolean;
  handleCloseButtonClick?: () => void;
} & InputHTMLAttributes<HTMLDivElement>;

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
