import { SwitchButtonProps } from 'models/types/SwitchButton';
import React from 'react';

import * as SC from './styles';

const SwitchButton: React.FC<SwitchButtonProps> = ({ active, ...props }) => {
  return (
    <SC.Container {...props} type="button" active={active}>
      <div className="dot" />
    </SC.Container>
  );
};

export { SwitchButton };
