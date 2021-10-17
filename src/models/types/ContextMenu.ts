import React from 'react';

type ContextMenuProps = {
  visible: boolean;
  contextMenuGroups: ContextMenuGroup[];
  handleContextMenuMouseLeave: () => void;
  handleContextMenuMouseEnter: () => void;
};

type ContextMenuGroup = {
  itens: ContextMenuItem[];
};

type ContextMenuItem = {
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type { ContextMenuGroup, ContextMenuItem, ContextMenuProps };
