import React, { useCallback, useState } from 'react';

import { SwitchButton } from 'components/SwitchButton';
import { SidebarMenuSectionProps } from 'models/types/SidebarMenu';

import * as SC from './styles';

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
