import React, { InputHTMLAttributes } from 'react';

import * as SC from './styles';

type SwitchButtonProps = {
  active: boolean;
} & InputHTMLAttributes<HTMLButtonElement>;

const SwitchButton: React.FC<SwitchButtonProps> = ({ active, ...props }) => {
  return (
    <SC.Container {...props} type="button" active={active}>
      <div className="dot" />
    </SC.Container>
  );
};

export { SwitchButton };
export type { SwitchButtonProps };
