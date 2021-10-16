import React, { useCallback, useState } from 'react';

import { SidebarMenuSectionCodes } from 'models/enumerators/SidebarMenuSectionCodes';
import { SwitchButton } from 'components/SwitchButton';

import * as SC from './styles';

type SidebarMenuSectionProps = {
  sidebarMenuSectionCode: SidebarMenuSectionCodes;
  title: string;
  description?: string;
};

const SidebarMenuSection: React.FC<SidebarMenuSectionProps> = ({
  title,
  description,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleSwitchClick = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <SC.Container>
      <header>
        <div>
          <strong>{title}</strong>

          <SwitchButton active={isActive} onClick={handleSwitchClick} />
        </div>

        {description && <p>{description}</p>}
      </header>

      <div className={`content ${isActive ? '' : 'deactivated'}`}>
        {children}
      </div>
    </SC.Container>
  );
};

export { SidebarMenuSection };
