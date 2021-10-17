import React from 'react';
import { v4 as uuid } from 'uuid';

import { ContextMenuProps } from 'models/types/ContextMenu';

import * as SC from './styles';

const ContextMenu: React.FC<ContextMenuProps> = ({
  visible,
  contextMenuGroups,
  handleContextMenuMouseLeave,
  handleContextMenuMouseEnter,
}) => {
  return (
    <SC.Container
      visible={visible}
      onMouseLeave={handleContextMenuMouseLeave}
      onMouseEnter={handleContextMenuMouseEnter}
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
