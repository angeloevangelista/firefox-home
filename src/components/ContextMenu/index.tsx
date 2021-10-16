import React from 'react';
import { v4 as uuid } from 'uuid';

import * as SC from './styles';

type ContextMenuProps = {
  visible: boolean;
  contextMenuGroups: ContextMenuGroup[];
  handleOptionContainerMouseLeave: () => void;
  handleOptionContainerMouseEnter: () => void;
};

type ContextMenuGroup = {
  itens: ContextMenuItem[];
};

type ContextMenuItem = {
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ContextMenu: React.FC<ContextMenuProps> = ({
  visible,
  contextMenuGroups,
  handleOptionContainerMouseLeave,
  handleOptionContainerMouseEnter,
}) => {


  return (
    <SC.Container
      visible={visible}
      onMouseLeave={handleOptionContainerMouseLeave}
      onMouseEnter={handleOptionContainerMouseEnter}
    >
      {contextMenuGroups.map((group) => (
        <ul key={uuid()}>
          {group.itens.map((item) => (
            <li key={uuid()}>
              <button onClick={item.onClick} disabled={item.disabled}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ))}
    </SC.Container>
  );
};

export { ContextMenu };
export type { ContextMenuGroup };
